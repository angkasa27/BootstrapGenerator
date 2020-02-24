import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark gaya">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Bootstrap Generator
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" className="nav-item nav-link active text-light">
                                Home<span class="sr-only">(current)</span>
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