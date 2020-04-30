import React, {useEffect, useState} from 'react';
import './itemList.css';
import PropTypes from 'prop-types';

function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data)
            });
    }, []);


    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
        })
    }


    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func
};

ItemList.defaultProps = {
    onItemSelected: () => {

    }
};

// export default WithData(ItemList);
export default ItemList;