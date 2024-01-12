import React from 'react'
import BoldIcon from '../../assets/icons/BoldIcon'
import ItalicIcon from '../../assets/icons/ItalicIcon'
import UnderLIcon from '../../assets/icons/UndelineIcon'
import CenterStrike from '../../assets/icons/StrikeCenterIcon'
import UnlinkIcon from '../../assets/icons/UnlinkIcon'
export default class SecondLinePresentation extends React.PureComponent {
  render() {
    return (
      <div className="second-line-items size">
        <button onClick={this.props.bold}>
          <BoldIcon />
        </button>
        <button onClick={this.props.italic}>
          <ItalicIcon />
        </button>
        <button onClick={this.props.underline}>
          <UnderLIcon />
        </button>
        <button onClick={this.props.strikeThrough}>
          <CenterStrike />
        </button>
        <button className="show-size" onClick={this.props.unlink}>
          <UnlinkIcon />
        </button>
      </div>
    )
  }
}
