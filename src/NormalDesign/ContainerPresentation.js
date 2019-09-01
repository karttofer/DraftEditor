import React from 'react'
import FirstLine from './TextAlignLinkRestoneAlign/FirstLineLogic'
import SecondLine from './BoldItalicAndOther/SecondLineLogic'
import ThirdLine from './Size/SizeLogic'
import FourthLine from './ColorBackground/ColorsContainer'
export default class Container extends React.Component {
  render() {
    return (
      <div
        className="container"
        onMouseMove={this.props.move}
        style={{
          display: this.props.appear ? 'flex' : 'none',
          left: `${this.props.x}px`,
          top: `${this.props.y}px`,
        }}
        id="invalid"
      >
        <FirstLine />
        <SecondLine />
        <ThirdLine />
        <FourthLine />
      </div>
    )
  }
}
