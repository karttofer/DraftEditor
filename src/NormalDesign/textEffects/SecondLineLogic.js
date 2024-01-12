import React from 'react'
import SecondLinePresentation from './SecondLineEditor'
import './style.css'
export default class SecondLineLogic extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      size: '',
    }
    this.bold = this.bold.bind(this)
    this.italic = this.italic.bind(this)
    this.underline = this.underline.bind(this)
    this.strikeThrough = this.strikeThrough.bind(this)
    this.unlink = this.unlink.bind(this)
  }
  bold() {
    document.execCommand('bold')
  }
  italic() {
    document.execCommand('italic')
  }
  underline() {
    document.execCommand('underline', false, '')
  }
  strikeThrough() {
    document.execCommand('strikeThrough', false, '')
  }
  unlink(e) {
    document.execCommand('unlink')
  }
  render() {
    return (
      <SecondLinePresentation
        bold={this.bold}
        italic={this.italic}
        underline={this.underline}
        strikeThrough={this.strikeThrough}
        unlink={this.unlink}
      />
    )
  }
}
