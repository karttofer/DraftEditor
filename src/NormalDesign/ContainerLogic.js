// dependencies
import React from 'react'

// components
import ContainerPresentation from './ContainerPresentation'

export default class ContainerLogic extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      x: 0,
      y: 0,
    }
  }
  componentDidMount() {
    document.onselectionchange = () => {
      document.onmouseup = () => {
        this.setState({
          show: document.getSelection().toString(),
        })
        return
      }

      document.onmousemove = (event) => {
        const {pageX, pageY} = event
  
        return !this.state.show
          ? this.setState({ x: pageX, y: pageY })
          : false
      }
  
      this.setState({
        show: false,
      })
    };

 
  }
  render() {
    return (
      <ContainerPresentation
      show={this.state.show}
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
