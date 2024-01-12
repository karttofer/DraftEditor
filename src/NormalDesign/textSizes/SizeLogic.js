import React from 'react'
import SizePresentation from './SizePresentation'
import './style.css'
export default class SizeLogic extends React.PureComponent {
  constructor(props) {
    super(props)
    this.one = this.one.bind(this)
    this.two = this.two.bind(this)
    this.three = this.three.bind(this)
    this.four = this.four.bind(this)
    this.five = this.five.bind(this)
    this.nine = this.nine.bind(this)
  }
  one() {
    document.execCommand('fontSize', false, '1')
  }
  two() {
    document.execCommand('fontSize', false, 2)
  }
  three() {
    document.execCommand('fontSize', false, 3)
  }
  four() {
    document.execCommand('fontSize', false, 4)
  }
  five() {
    document.execCommand('fontSize', false, 5)
  }
  nine() {
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
