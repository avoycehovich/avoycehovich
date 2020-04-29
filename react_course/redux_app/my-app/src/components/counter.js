import React from 'react';
import {connect} from 'react-redux';
import * as action from '../acions'

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className='jumbotron'>
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={dec}>DEC</button>
            <button className="btn btn-primary" onClick={inc}>INC</button>
            <button className="btn btn-primary" onClick={rnd}>RND</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};


export default connect(mapStateToProps, action)(Counter);