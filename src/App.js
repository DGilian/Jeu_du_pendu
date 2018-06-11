import React, { Component } from 'react';
import './App.css';

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const WORDS = ["HELLO"]

class App extends Component {
  constructor() {
    super()
    const selectWord = WORDS[this.rand(0, WORDS.length)]

    this.state = {
      usedLetters: [],
      word: selectWord,
      show: '_'.repeat(selectWord.length),
      keyboard: LETTERS
    }
  }

  handleClick = ({ target }) => {
    this.setState(state => {
      const usedLetters = state.usedLetters.includes(target.value) ? usedLetters : [...state.usedLetters, target.value]
      const indexLetterKeyboard = state.keyboard.indexOf(target.value)
      console.log(indexLetterKeyboard)
      console.log(state.keyboard)
      return {
        usedLetters,
        show: state.word.replace(
          /\w/g,
          (letter) => (usedLetters.includes(letter) ? letter : '_')
        ),
        keyboard: state.keyboard.filter(value => value !== target.value)
      }
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
          <p className="word">{this.state.show}</p>
        </div>
        <div className="keyboard">
          {this.state.keyboard.map((value) => {

            return <input type="button" value={value} key={value} onClick={this.handleClick} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
