import React, { Component } from "react";
import Utama from "./Components/Utama";
import { FaHeart } from 'react-icons/fa';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>

        <Utama />

        <footer className="fixed-bottom text-center bg-white shadow-lg pt-2 kecil">
          <p> Create with <FaHeart className="text-danger" /> by <b>Dimas Angkasa</b> </p>
        </footer>
      </div>
    );
  }
}

export default App;