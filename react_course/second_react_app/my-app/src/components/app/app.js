import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

const App = () => {
    const data = [
        {
            label: "Going to learn react",
            important: true,
            id: "qwe"
        },
        {
            label: "That is good",
            important: false,
            id: "asd"
        },
        {
            label: "I need a break...",
            important: false,
            id: "zxc"
        },
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>
    );
};

export default App;