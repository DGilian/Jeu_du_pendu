import React, { Component } from 'react'
import './App.css'

const WORDS = ['KO', 'YO']
const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

class App extends Component {
  constructor() {
    super()

    const selectedWord = WORDS[this.rand(0, WORDS.length - 1)]
    this.state = {
      usedLetters: [],
      word: selectedWord,
      show: '_'.repeat(selectedWord.length)
    }
  }

  handleClick = ({ target }) => {
    this.setState(state => {
      const usedLetters = state.usedLetters.includes(target.value)
        ? state.usedLetters
        : [...state.usedLetters, target.value]
      return {
        usedLetters,
        show: state.word.replace(
          /\w/g,
          letter => (usedLetters.includes(letter) ? letter : '_')
        )
      }
    })
  }

  rand(min, max) {
    // random entier entre min et max
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>{this.state.show}</p>
        </div>
        <div className="keyboard">
          {LETTERS.map(value => {
            return (
              <input
                type="button"
                value={value}
                key={value}
                onClick={this.handleClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
