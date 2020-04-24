import React, {Component} from 'react';
import GotService from "../../services/gotService";
import './charDetails.css';
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateChar();
    }

    componentDidCatch() {
        this.onCharError();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then(this.onCharLoaded);
        // this.foo.bar = 0;

    }

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false,
            error: false
        })
    };

    onCharError = () => {
        this.setState({
            char: null,
            loading: false,
            error: true
        })
    };

    render() {

        const {error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (!this.state.char) {
            return <span className='select-error'>Please select character</span>
        }

        const {char: {name, gender, born, died, culture}, loading} = this.state;

        if (loading) {
            return <Spinner/>
        }

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}