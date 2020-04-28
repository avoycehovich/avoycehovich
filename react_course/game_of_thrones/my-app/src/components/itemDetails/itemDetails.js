import React, {useEffect, useState} from 'react';
import './itemDetails.css';


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {Field}

function ItemDetails({getItemData, itemId, children}) {

    const [item, updateItem] = useState([]);

    useEffect(() => {
            getItemData(itemId)
                .then((item) => {
                    updateItem(item);
                });
    }, [item]);


    return (
        <div className="char-details rounded">
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}

export default ItemDetails