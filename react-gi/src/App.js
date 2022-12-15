import "./App.css";

import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";

export default class App extends Component {
  // EASY
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     person: {
  //       name: "Yareline Merced",
  //       number: "787-205-9774",
  //       birthDate: "16-02-1999",
  //     },
  //   };
  // }
  //HARD
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          id: 1,
          name: "Yareline Merced",
          number: "787-777-7777",
          birthDate: "16-02-1999",
        },
        {
          id: 2,
          name: "Alexis Luciano",
          number: "787-999-9999",
          birthDate: "13-02-1999",
        },
        {
          id: 3,
          name: "Alexia Lorenzana",
          number: "787-888-8888",
          birthDate: "29-12-2000",
        },
      ],
    };
  }
  render() {
    return (
      // // VERY EASY
      // <div>
      //   <p>Yareline Merced</p>
      //   <p>787-205-9774</p>
      //   <p>16-02-1999</p>
      // </div>
      //MEDIUM part 1
      // <div>
      //   <p>Name: {this.state.person.name}</p>
      //   <p>Name: {this.state.person.number}</p>
      //   <p>Name: {this.state.person.birthDate}</p>
      // </div>
      //MEDIUM part 2 + HARD
      <div>
        <BasicInfo info={this.state.person} />
      </div>
    );
  }
}
