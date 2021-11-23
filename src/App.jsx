import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 500,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result) {
    if (result) {
      this.setState({ result })
      console.log(result)
    }
  }
  handleError(err) {
    console.error(err)
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={'user'}

        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}