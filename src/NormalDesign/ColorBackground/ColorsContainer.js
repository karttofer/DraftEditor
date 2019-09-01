import React from 'react'
import ColorBackPresentation from './ColorBackgroundPresentation'
import Titles from './TitleColorsComponent'
import './style.css'
export default class ColorBackground extends React.PureComponent {
  render() {
    return (
      <div>
      	<Titles /><ColorBackPresentation />
      </div>
    )
  }
}
