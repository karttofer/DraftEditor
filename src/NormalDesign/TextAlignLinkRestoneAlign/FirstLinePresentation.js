import React from 'react'
import LeftICon from '../icons/LeftICon'
import RightICon from '../icons/RightICon'
import CenterIcon from '../icons/CenterIcon'
import FormatClean from '../icons/FormatCleanIcon'
import LinkIcon from '../icons/LinkIcon'
export default class AlignOptions extends React.Component{
  render(){
    return(
      <div className="first-line-items size">
      <button onClick={this.props.left}>
        <LeftICon />
      </button>
      <button onClick={this.props.center}>
        <CenterIcon />
      </button>
      <button onClick={this.props.right}>
        <RightICon />
      </button>
      <button onClick={this.props.link} className="link-button">
        <LinkIcon />
        <div className="link-text-windows">
          <input
            type="text"
            placeholder="...url"
            onChange={this.props.change}
            onKeyPress={this.props.onPress}
          />
          <div></div>
        </div>
      </button>
      <button onClick={this.props.clean}>
        <FormatClean />
      </button>
    </div>
    )
  }
}
