import React, {Component} from 'react';
import GotService from '../../services/gotService'
import ErrorMessage from "../errorMessage/index";
import ItemList from "../itemList/index";
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

    gotService = new GotService();

    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            (<ItemList
                    onItemSelected={(itemId) => {
                        this.props.history.push(itemId)
                    }}
                    getData={this.gotService.getBooks}
                    renderItem={(item) => item.name}
                />
            )
        )
    }

}

export default withRouter(BookPage);