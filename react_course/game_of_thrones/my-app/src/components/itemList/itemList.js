import React, {Component} from 'react';
import Spinner from '../spinner'
import './itemList.css';
import PropTypes from 'prop-types';
import WithData from '../withData';

class ItemList extends Component {


    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        })
    };

    render() {

        const {data} = this.props;
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func
};

ItemList.defaultProps = {
    onItemSelected: () => {

    }
};

export default WithData(ItemList);