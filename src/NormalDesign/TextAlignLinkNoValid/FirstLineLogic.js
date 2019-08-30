/*
	This code it's importar because here we can see what I'm doing to change the text:
	I used execCommand to get controll the text.

	Problem: When you will make a link, the getSelection quite the last selection (at this case was
	the text that you selected) buy why this happend? I implemented a system that allows you write
	you link without alert ()

*/
import React from 'react'
import FirstLinePresentation from './FirstLinePresentation'
import './style.css'
export default class FirstLineLogic extends React.Component {
  state = {
    link: '',
    isLink: false,
    select: {},
  }
  componentDidMount = () => {
    setInterval(() => {
      if (document.getSelection().toString()) {
        this.getSelect()
      }
    }, 100)
  }
  getSelect = () => {
    this.setState({
      select: window.getSelection().getRangeAt(0),
    })
  }
  leftAlign = () => {
    document.execCommand('justifyLeft', false, null)
  }
  rightAlign = () => {
    document.execCommand('justifyRight', false, null)
  }
  centerAlign = () => {
    document.execCommand('justifyCenter', false, null)
  }
  createLink = e => {
    if (e.key == 'Enter' && this.state.link) {
      let element = document.createElement('a')
      element.href = this.state.link
      this.state.select.surroundContents(element)
    }
  }
  removeFormat = () => {
    document.execCommand('removeFormat', false, null)
  }
  getLink = e => {
    this.setState({
      link: e.target.value,
    })
    console.log(e.key)
  }
  render() {
    return (
      <FirstLinePresentation
        left={this.leftAlign}
        right={this.rightAlign}
        center={this.centerAlign}
        onPress={e => this.createLink(e)}
        clean={this.removeFormat}
        change={e => this.getLink(e)}
      />
    )
  }
}
