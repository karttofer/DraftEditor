import React from 'react'
import SizePresentation from './SizePresentation'
import './style.css'
export default class SizeLogic extends React.PureComponent {
  one = () => {
    document.execCommand('fontSize', false, '1')
  }
  two = () => {
    document.execCommand('fontSize', false, 2)
  }
  three = () => {
    document.execCommand('fontSize', false, 3)
  }
  four = () => {
    document.execCommand('fontSize', false, 4)
  }
  five = () => {
    document.execCommand('fontSize', false, 5)
  }
  nine = () => {
    document.execCommand('fontSize', false, 9)
  }
  render() {
    return (
      <SizePresentation
        one={this.one}
        two={this.two}
        three={this.three}
        four={this.four}
        five={this.five}
        nine={this.nine}
      />
    )
  }
}
