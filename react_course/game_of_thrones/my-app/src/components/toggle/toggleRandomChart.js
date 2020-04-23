import React, {Component} from 'react';

export default class ToggleButton extends Component {

    render() {
        const {onToggle} = this.props;
        return (
            <button
                type={"button"}
                onClick={onToggle}
            >Toggle random character</button>
        )
    }
}