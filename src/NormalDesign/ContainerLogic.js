import React from 'react'
import ContainerPresentation from './ContainerPresentation'
export default class ContainerLogic extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      appear: false,
      x: 0,
      y: 0,
    }
  }
  componentDidMount() {
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
      <ContainerPresentation
        appear={this.state.appear}
        x={
          this.state.x > window.innerWidth / 2
            ? this.state.x - 230
            : this.state.x + 10
        }
        y={
          this.state.y > window.innerHeight / 2
            ? this.state.y - 210
            : this.state.y + 10
        }
      />
    )
  }
}
