const initState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    oneItemCount: 0,
    totalPrice: 0
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            console.log(`Loaded -> Total: ${state.totalPrice}`);
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: true
            };
        case 'ITEM_ADD_TO_CARD':
            const id = action.payload;
            const itemInd = state.items.findIndex(item => item.id ===id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                };
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            }
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
        case 'ITEM_REMOVE_FROM_CARD':
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index);
            const newPrice = state.totalPrice - state.items[itemIndex].price;
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: newPrice
            };
        default:
            return state;
    }
};

export default reducer;