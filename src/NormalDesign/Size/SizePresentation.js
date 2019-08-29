import React from 'react'
const SizeComponent = ({ one, two, three, four, five, nine }) => {
  return (
    <div className="third-line-items size" id="invalid">
      <p className="default" id="invalid">
        Size
      </p>
      <button className="default" onClick={one} id="invalid">
        <p>1</p>
      </button>
      <button className="default" onClick={two} id="invalid">
        <p>2</p>
      </button>
      <button className="default" onClick={three} id="invalid">
        <p>3</p>
      </button>
      <button className="default" onClick={four} id="invalid">
        <p>4</p>
      </button>
      <button className="default" onClick={five} id="invalid">
        <p>5</p>
      </button>
      <button className="default" onClick={nine} id="invalid">
        <p>9</p>
      </button>
    </div>
  )
}
export default SizeComponent
