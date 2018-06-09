import React, { Component } from 'react';
import './App.css';

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const WORDS = ["HELLO", "BONJOUR", "TELEVISION", "ECRAN", "BANANE"]

class App extends Component {
  constructor() {
    super()
    this.state = {
      usedLetters: [],
      word: WORDS[this.rand(0, WORDS.length)],
      show: " "
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    this.setState({ usedLetters: [...this.state.usedLetters, ...e.target.value] })
    this.computeDisplay(this.state.word, this.state.usedLetters)
  }
  computeDisplay = (phrase, usedLetters) => {
    this.setState({
      show: phrase.replace(/\w/g,
        (letter) => (usedLetters.includes(letter) ? letter : '_')
      )
    })
  }

  rand(min, max) {
    // random entier entre min et max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>{this.state.show}</p>
        </div>
        <div className="keyboard">
          {LETTERS.map((value) => {

            return <input type="button" value={value} key={value} onClick={this.handleClick} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
