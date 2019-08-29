import React from 'react'
import FirstLine from './TextAlignLinkNoValid/FirstLineLogic'
import SecondLine from './BoldItalicAndOther/SecondLineLogic'
import ThirdLine from './Size/SizeLogic'
import FourthLine from './ColorBackground/ColorsContainer'
const Container = ({ appear, x, y, move }) => {
  return (
    <div
      className="container"
      onMouseMove={move}
      style={{
        display: appear ? 'flex' : 'none',
        transform: `translate(${x}px,${y}px)`,
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
export default Container
