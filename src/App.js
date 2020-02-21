import React, { Component } from "react";
import Utama from "./Components/Utama";
import { Link } from "react-router-dom";
import "./App.css";
import { FaHeart } from 'react-icons/fa';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark gaya">
          <div className="container">
            <Link to="/Home" className="navbar-brand">
              B-Gen
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
        <Utama />

        <footer className="fixed-bottom text-center bg-white shadow-lg pt-2 kecil">
          <p> Create with <FaHeart className="text-danger" /> by <b>Dimas Angkasa</b> </p>
        </footer>
      </div>
    );
  }
}

export default App;