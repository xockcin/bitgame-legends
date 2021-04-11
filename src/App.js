import React, {Component} from 'react'
import './App.css';
import OneBit from './components/OneBit'
import Byte from './components/Byte'
import {SCRIPT} from "./shared/script"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      script: SCRIPT,
    };
    this.handlePageTurn = this.handlePageTurn.bind(this);
  }

  handlePageTurn() {
    let newPage = this.state.page + 1;
    this.setState({ page: newPage });
    console.log("new page: " + this.state.page)
  }

  render() {
    const thisPage = this.state.script[this.state.page]
    return (
      <div className="container">
        <Byte
          size={thisPage.bitCount}
          number={thisPage.number}
          toggle={thisPage.toggle}
        />
        <p>{thisPage.text}</p>
        <button
          onClick={this.handlePageTurn}
        >Next Page</button>
      </div>
    );
  }
}

export default App;
