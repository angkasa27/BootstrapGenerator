import React, { Component } from "react";

class Media extends Component {
  render() {
    return (
      <div className="media my-3">
        <img
          src={process.env.PUBLIC_URL + "/image/" + this.props.image}
          className="mr-3"
          width="100"
          alt="media"
        />
        <div className="media-body text-left">
          <h5 className="mt-5">{this.props.title}</h5>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Media;
