import React, {Component} from 'react';
import ItemDetails, {Field} from "../itemDetails/index";
import GotService from '../../services/gotService'

export default class BooksItem extends Component {

    gotService = new GotService();

    render() {
        return (
            <ItemDetails itemId={this.props.bookId}
                         getItemData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
    }

}