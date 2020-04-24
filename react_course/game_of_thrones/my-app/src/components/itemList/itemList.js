import React, {Component} from 'react';
import GotService from "../../services/gotService";
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'
import './itemList.css';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            });
        // this.props.foo = 0;
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            );
        })
    };

    render() {

        const {charList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}