import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css'
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage'
import HousePage from '../pages/housePage'
import GotService from '../../services/gotService'

export default class App extends Component {

    gotService = new GotService();


    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };


    render() {

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character
                            </button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <BookPage/>
                    <HousePage/>
                </Container>
            </>
        );
    }
};

