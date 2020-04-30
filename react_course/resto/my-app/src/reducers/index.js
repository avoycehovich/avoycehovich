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
            const item = state.menu.find((item) => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };
            console.log(`Add -> new item price: ${newItem.price}`);
            const newTotalPrice = state.totalPrice + newItem.price;
            console.log(`Add -> TotalPrice: ${newTotalPrice}`);
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: newTotalPrice
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