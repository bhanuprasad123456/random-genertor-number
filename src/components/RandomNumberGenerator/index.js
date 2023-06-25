// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state: {count: 0}

  getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState = {count: number}
    console.log(number)
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-generator-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.getRandomNumber}
            type="button"
            className="generate-button"
          >
            Generate
          </button>
        </div>
        <p className="counter">{count}</p>
      </div>
    )
  }
}

export default RandomNumber
