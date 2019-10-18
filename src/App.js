import React, { Component } from 'react'
import Header from './Header'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: [],
    };
  }

  handleNewChar= newChar => {
    this.setState({
      characters: newChar,
    });
    console.log(this.state.characters);
  };


  render() {
    return (
      <section className= 'App'>
        <Header />
      </section>
    )
  }
}


//Allow users to search star wars api for
//character name and displays matching characters
//must be deployed using zeit