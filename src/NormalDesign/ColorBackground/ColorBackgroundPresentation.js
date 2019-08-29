import React, { useState } from 'react'
const Colors = ({}) => {
  const [fontColor, setFontColor] = useState('#000000')
  const [backColor, setBackColor] = useState('#000000')
  const colorFont = e => {
    setFontColor(e.target.attributes.color.value)
    document.execCommand('foreColor', false, e.target.attributes.color.value)
  }
  const backFont = e => {
    setBackColor(e.target.attributes.color.value)
    document.execCommand('BackColor', false, e.target.attributes.color.value)
  }
  return (
    <div className="colback-container size">
      <div className="colors-container ">
        <button className="actual-color" style={{ backgroundColor: fontColor }}>
          <div></div>
        </button>
        <button
          className="box-color default color-one"
          color="#000000"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-two"
          color="#FFFFFC"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-three"
          color="#D7CF07"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-four"
          color="#FF7F11"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-five"
          color="#FF1B1C"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-six"
          color="#4CB944"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-seven"
          color="#1C1D1A"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-eight"
          color="#FB0D72"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-nine"
          color="#E8A87C"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-ten"
          color="#41B3A3"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-eleven"
          color="#2E1C2B"
          onClick={e => colorFont(e)}
        >
          <div></div>
        </button>
      </div>
      <div className="colors-container">
        <button className="actual-color" style={{ backgroundColor: backColor }}>
          <div></div>
        </button>
        <button
          className="box-color default color-thirteen"
          color="#F7F17E"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-fourteen"
          color="#590925"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-fifteen"
          color="#AAD2BA"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-sixteen"
          color="#D9FFF5"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-seventeen"
          color="#FFC700"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-eighteen"
          color="#53B6F4"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-eighteen"
          color="#32936F"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-twenty"
          color="#0700B3"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-twenty-one"
          color="#C44900"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-twenty-two"
          color="#E5C697"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
        <button
          className="box-color default color-twenty-three"
          color="#FF6464"
          onClick={e => backFont(e)}
        >
          <div></div>
        </button>
      </div>
    </div>
  )
}
export default Colors
