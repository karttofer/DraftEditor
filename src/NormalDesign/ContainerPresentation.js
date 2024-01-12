import React from 'react'
import FirstLine from './textAligns/FirstLineLogic'
import SecondLine from './textEffects/SecondLineLogic'
import ThirdLine from './textSizes/SizeLogic'
import FourthLine from './textColors/ColorsContainer'
export default class Container extends React.Component {
  render() {
    return (
      <div
        id="editor"
        className="container"
        onMouseMove={this.props.move}
        style={{
          display: this.props.show ? 'flex' : 'none',
          left: `${this.props.x}px`,
          top: `${this.props.y}px`,
        }}
      >
        <FirstLine />
        <SecondLine />
        <ThirdLine />
        <FourthLine />
      </div>
    )
  }
}
