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
  const colorProps = [
    {
      colors: [
        '#000000',
        '#FFFFFC',
        '#D7CF07',
        '#FF7F11',
        '#FF1B1C',
        '#4CB944',
        '#1C1D1A',
        '#FB0D72',
        '#E8A87C',
        '#41B3A3',
        '#2E1C2B',
      ],
      classname: 'box-color default',
    },
  ]
  const backProps = [
    {
      colors: [
        '#F7F17E',
        '#590925',
        '#AAD2BA',
        '#D9FFF5',
        '#FFC700',
        '#53B6F4',
        '#32936F',
        '#0700B3',
        '#C44900',
        '#E5C697',
        '#FF6464',
      ],
      classname: 'box-color default',
    },
  ]
  return (
    <div className="colback-container size">
      <div className="colors-container ">
        <button className="actual-color" style={{ backgroundColor: fontColor }}>
          <div></div>
        </button>
        {colorProps[0].colors.map((v, i) => (
          <button
            color={v}
            className={`${colorProps[0].classname} color-${i + 1}`}
            onClick={e => colorFont(e)}
          >
            <div></div>
          </button>
        ))}
      </div>
      <div className="colors-container">
        <button className="actual-color" style={{ backgroundColor: backColor }}>
          <div></div>
        </button>
        {backProps[0].colors.map((v, i) => (
          <button
            color={v}
            className={`${backProps[0].classname} color-${i + 11}`}
            onClick={e => backFont(e)}
          >
            <div></div>
          </button>
        ))}
      </div>
    </div>
  )
}
export default Colors
