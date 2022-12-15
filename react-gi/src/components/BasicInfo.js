import React, { Component } from "react";
import "./BasicInfo.css";

// Medium
export default class BasicInfo extends Component {
  render() {
    return (
      // MEDIUM
      // <div className='info-container'>
      //   <p>Name: {this.props.info.name}</p>
      //   <p>Number: {this.props.info.number}</p>
      //   <p>Birth Date: {this.props.info.birthDate}</p>
      // </div>
      // HARD
      <div>
        {this.props.info.map((people) => {
          return (
            <div className="info-container">
              <p key={people.id}>
                Name: {people.name} --- Number: {people.number} --- Birth Date:{" "}
                {people.birthDate}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
