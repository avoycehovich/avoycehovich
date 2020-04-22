import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header">
            <h1>Arkadiy Voycehovich</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    );
};

export default AppHeader;