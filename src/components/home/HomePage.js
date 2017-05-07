import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h2>Sample Application Home Page</h2>
                    <p> React Redux using es6 and webpack for responsive web app </p>
                </div>
            </div>
        );
    }
}

export default HomePage;