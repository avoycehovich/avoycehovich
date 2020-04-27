import React, {Component} from 'react';
import './itemDetails.css';
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {Field}

export default class ItemDetails extends Component {


    state = {
        item: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidCatch() {
        this.onItemError();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getItemData} = this.props;
        if (!itemId) {
            return;
        }

        getItemData(itemId)
            .then(this.onItemLoaded);

    }

    onItemLoaded = (item) => {
        this.setState({
            item: item,
            loading: false,
            error: false
        })
    };

    onItemError = () => {
        this.setState({
            item: null,
            loading: false,
            error: true
        })
    };

    render() {

        const {error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (!this.state.item) {
            return <span className='select-error'>Please select item</span>
        }

        const {item} = this.state;
        const {item: {name}, loading} = this.state;

        if (loading) {
            return <Spinner/>
        }

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}