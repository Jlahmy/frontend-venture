import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

import 'react-notifications/lib/notifications.css';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handlePrice = () => {

        this.props.history.push('/choices') // THIS IS THE KEY LINE

        fetch('/userPrefencesFirstActivity')
            .then(response => response.text())
            .then(responseBody => {

            })
    }
    render() {
        return (
            <div>
                <div>
                    A choose your price range!
                        </div>
                <form onSubmit={this.handlePrice} >
                    <input type="checkbox" value="$" />$<br />
                    <input type="checkbox" value="$$" />$$<br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

let Price = withRouter(Content);

export default Price;