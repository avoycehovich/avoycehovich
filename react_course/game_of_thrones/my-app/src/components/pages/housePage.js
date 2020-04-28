import React, {Component} from 'react';
import GotService from '../../services/gotService'
import ErrorMessage from "../errorMessage/index";
import ItemList from "../itemList/index";
import ItemDetails, {Field} from "../itemDetails/index";
import RowBlock from "../rowBlock/index";

export default class HousePage extends Component {

    gotService = new GotService();

    state = {
        selectedHouse: 1,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    };

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    };

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (<ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getHouses}
            renderItem={(item) => item.name}
        />);

        const houseDetails = (
            <ItemDetails itemId={this.state.selectedHouse}
                         getItemData={this.gotService.getHouse}
            >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='Ancestral weapons'/>
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={houseDetails}/>
        );
    }

}