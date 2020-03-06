import React, { Component } from "react";
import { Link } from "react-router-dom";
import Code from "../Asset/CodePage"

class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Bootstrap Generator</h1>
            <p className="lead">Bootstrap has a lot of customization. We make it more easy for you to pick it</p>
          </div>
        </div>
        <div className="container pb-5">

          <div className="row my-5">
            <div className="col-md-5">
              <h1 className="text-light">How to use it?</h1>
              <p className="text-light ml-5">Create new HTML file<br />Copy The code</p>
            </div>
            <div className="col-md-7">
              <Code />
            </div>
          </div>

          <div className="row justify-content-md-center">

            {/* <div className="col-md-2"></div> */}

            <div className="col-md-4">
              <div className="card rounded-lg shadow border-0 bg-warning ">
                <h3 className="card-title bold text-center text-dark mt-3">Alert Generator</h3>
                <div className="card-body">
                  <ul className="text-dark">
                    <li >Customize text color</li>
                    <li className="mt-2">Customize alert color</li>
                    <li className="mt-2">Customize text align</li>
                    <li className="mt-2">Live code</li>
                    <li className="mt-2">Output code</li>
                  </ul>
                  <div className="text-center mt-4">
                    <Link to="/AlertGenerator" className="btn btn-dark rounded-pill">
                      Open
                  </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded-lg shadow border-0 bg-warning ">
                <h3 className="card-title bold text-center text-dark mt-3">Button Generator</h3>
                <div className="card-body">
                  <ul className="text-dark">
                    <li >Customize text color</li>
                    <li className="mt-2">Customize alert color</li>
                    <li className="mt-2">Customize text align</li>
                    <li className="mt-2">Live code</li>
                    <li className="mt-2">Output code</li>
                  </ul>
                  <div className="text-center mt-4">
                    <Link to="/ButtonGenerator" className="btn btn-dark rounded-pill">
                      Open
                  </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded-lg shadow border-0 bg-warning ">
                <h3 className="card-title bold text-center text-dark mt-3">Card Generator</h3>
                <div className="card-body">
                  <ul className="text-dark">
                    <li >Customize text color</li>
                    <li className="mt-2">Customize alert color</li>
                    <li className="mt-2">Customize text align</li>
                    <li className="mt-2">Live code</li>
                    <li className="mt-2">Output code</li>
                  </ul>
                  <div className="text-center mt-4">
                    <Link to="/CardGenerator" className="btn btn-dark rounded-pill">
                      Open
                  </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-2"></div> */}

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
