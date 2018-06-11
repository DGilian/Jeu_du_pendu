import React, { Component } from 'react'
import './App.css'
import Canvas from './Canvas'

const WORDS = ['KO', 'YO', 'HELLO', 'BANANE']
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
const difficulty = 5

class App extends Component {
  constructor(props) {
    super(props)

    const selectedWord = WORDS[this.rand(0, WORDS.length - 1)]
    this.state = {
      usedLetters: [],
      word: selectedWord,
      show: '_'.repeat(selectedWord.length),
      keyboard: LETTERS,
      count: 1,
      status: "play"
    }
  }

  handleClick = ({ target }) => {


    this.setState(state => {
      const usedLetters = state.usedLetters.includes(target.value)
        ? state.usedLetters
        : [...state.usedLetters, target.value]

      const show = state.word.replace(
        /\w/g,
        letter => (usedLetters.includes(letter) ? letter : '_')
      )

      return {
        usedLetters,
        show,
        keyboard: state.keyboard.filter(value => value !== target.value),
        count: state.count + 1,
        status: state.word === show ? "gain" : "play"
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
          <p className="word">{this.state.show}</p>
        </div>
        {difficulty <= this.state.count && this.state.status === "play" ?
          <div>
            <p>Pendu !</p>
          </div>

          :
          <div className="keyboard">
            {this.state.keyboard.map(value => {
              return (
                <input
                  type="button"
                  value={value}
                  key={value}
                  onClick={this.handleClick}
                />
              )
            })}
          </div>}
        <Canvas count={this.state.count} status={this.state.status} difficulty={difficulty} />
      </div>
    )
  }
}

export default App
