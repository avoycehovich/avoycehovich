import React, {Component} from 'react';
import ItemList from '../itemList/index';
import ItemDetails, {Field} from '../itemDetails/index';
import ErrorMessage from "../errorMessage/index";
import GotService from '../../services/gotService'
import RowBlock from '../rowBlock/index'

export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    };

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (<ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={({name, gender}) => `${name} (${gender})`}
        />);

        const charDetails = (
            <ItemDetails itemId={this.state.selectedChar}
                         getItemData={this.gotService.getCharacter}
                         children={this.props.children}
            >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={charDetails}/>
        );
    }
}
