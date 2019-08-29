import React from 'react'
import BoldIcon from '../icons/BoldIcon'
import ItalicIcon from '../icons/ItalicIcon'
import UnderLIcon from '../icons/UndelineIcon'
import CenterStrike from '../icons/StrikeCenterIcon'
import UnlinkIcon from '../icons/UnlinkIcon'
const SecondLinePresentation = ({
  bold,
  italic,
  underline,
  strikeThrough,
  unlink,
}) => {
  return (
    <div className="second-line-items size" id="invalid">
      <button onClick={bold} id="invalid">
        <BoldIcon />
      </button>
      <button onClick={italic} id="invalid">
        <ItalicIcon />
      </button>
      <button onClick={underline} id="invalid">
        <UnderLIcon />
      </button>
      <button onClick={strikeThrough} id="invalid">
        <CenterStrike />
      </button>
      <button className="show-size" onClick={unlink} id="invalid">
        <UnlinkIcon />
      </button>
    </div>
  )
}
export default SecondLinePresentation
