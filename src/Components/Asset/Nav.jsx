import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark gaya">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Bootstrap Generator
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active text-light">
                                Home<span className="sr-only">(current)</span>
                            </Link>
                            <Link to="/AlertGenerator" className="nav-item nav-link text-light">
                                Alert
                            </Link>
                            <Link to="/ButtonGenerator" className="nav-item nav-link text-light">
                                Button
                            </Link>
                            <Link to="/CardGenerator" className="nav-item nav-link text-light">
                                Cards
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>
        )
    }
}