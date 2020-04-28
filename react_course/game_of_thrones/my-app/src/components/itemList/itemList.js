import React, {Component} from 'react';
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'
import './itemList.css';
import PropTypes from 'prop-types';

export default class ItemList extends Component {

    state = {
        charList: null,
        error: false
    };

    static propTypes = {
        onItemSelected: PropTypes.func
    };

    static defaultProps = {
        onItemSelected: () => {

        }
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            });
    }

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

        const {itemList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
