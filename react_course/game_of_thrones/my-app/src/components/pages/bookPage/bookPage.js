import React, {Component} from 'react';
import GotService from '../../../services/gotService'
import ErrorMessage from "../../errorMessage/index";
import ItemList from "../../itemList/index";
import ItemDetails, {Field} from "../../itemDetails/index";
import RowBlock from "../../rowBlock/index";

export default class BookPage extends Component {

    gotService = new GotService();

    state = {
        selectedBook: 1,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    };

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (<ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getBooks}
            renderItem={(item) => item.name}
        />);

        const bookDetails = (
            <ItemDetails itemId={this.state.selectedBook}
                         getItemData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        );
    }

}