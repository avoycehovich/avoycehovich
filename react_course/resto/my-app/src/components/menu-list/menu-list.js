import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuError, menuLoaded, menuRequested} from "../../actions";
import Spinner from '../spinner'

import './menu-list.scss';

class MenuList extends Component {

    render() {
        const {menuItems} = this.props;

        return (
            <ul className="menu__list">
                {menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
};

const WithData = (View) => {
    return class extends Component {

        componentDidMount() {
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(this.props.menuError());
        }

        render() {
            const {menuItems, loading} = this.props;

            if (loading) {
                return <Spinner/>
            }

            return <View {...this.props} menuItems={menuItems}/>
        }

    }

};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(WithData(MenuList)));