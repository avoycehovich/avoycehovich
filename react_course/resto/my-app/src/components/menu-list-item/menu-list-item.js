import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
    const {tittle, price, url, category, categoryImg} = menuItem;
    return (
        <li className="menu__item">
            <div className="menu__title">{tittle}</div>
            <img className="menu__img" src={url} alt={tittle}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <img src={categoryImg}></img>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>

    )
};

export default MenuListItem;