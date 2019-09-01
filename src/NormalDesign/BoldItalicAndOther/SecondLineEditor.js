import React from 'react'
import BoldIcon from '../icons/BoldIcon'
import ItalicIcon from '../icons/ItalicIcon'
import UnderLIcon from '../icons/UndelineIcon'
import CenterStrike from '../icons/StrikeCenterIcon'
import UnlinkIcon from '../icons/UnlinkIcon'
export default class SecondLinePresentation extends React.PureComponent {
  render() {
    return (
      <div className="second-line-items size" id="invalid">
        <button onClick={this.props.bold} id="invalid">
          <BoldIcon />
        </button>
        <button onClick={this.props.italic} id="invalid">
          <ItalicIcon />
        </button>
        <button onClick={this.props.underline} id="invalid">
          <UnderLIcon />
        </button>
        <button onClick={this.props.strikeThrough} id="invalid">
          <CenterStrike />
        </button>
        <button className="show-size" onClick={this.props.unlink} id="invalid">
          <UnlinkIcon />
        </button>
      </div>
    )
  }
}
