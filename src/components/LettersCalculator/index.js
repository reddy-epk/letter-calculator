import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="back">
        <div className="content">
          <div className="inner-content">
            <h1 className="head">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="para" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="inut-style holder"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="write me"
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="button">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
