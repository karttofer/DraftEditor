import React from 'react'
import ContainerPresentation from './ContainerPresentation'
export default class ContainerLogic extends React.PureComponent {
  state = {
    appear: false,
    x: 0,
    y: 0,
  }
  componentDidMount = () => {
    setInterval(() => {
      if (document.getSelection().toString() && this.state.appear == false) {
        this.setState({
          appear: !this.state.appear,
        })
      }
    }, 100)
    document.body.addEventListener('mousemove', e => {
      return this.state.appear
        ? null
        : this.setState({ x: e.pageX, y: e.pageY })
    })
    document.body.addEventListener('click', a => {
      let getId = a.path.map(val => val.id)
      return !getId.includes('invalid')
        ? this.setState({ appear: false })
        : false
    })
  }
  render() {
    return (
      <>
        <p contentEditable>Hello world</p>
        <ContainerPresentation
          appear={this.state.appear}
          x={
            this.state.x > Math.floor(window.innerWidth / 2)
              ? this.state.x / 2 + this.state.x / 3
              : this.state.x
          }
          y={this.state.y - 10}
        />
      </>
    )
  }
}
