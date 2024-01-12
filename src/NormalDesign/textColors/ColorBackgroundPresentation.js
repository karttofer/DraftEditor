import React from 'react'
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
export default class Colors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontColor: '#000000',
      backgroundValue: '#000000',
    }

    this.colorHandler = this.colorHandler.bind(this)
    this.backgroundHandler = this.backgroundHandler.bind(this)
  }
  colorHandler(event) {
    this.setState(
      {
        fontColor: event.target.attributes.color.value,
      },
      () => document.execCommand('foreColor', false, this.state.fontColor)
    )
  }
  backgroundHandler(event) {
    this.setState(
      {
        backgroundValuelor: event.target.attributes.color.value,
      },
      () => document.execCommand('BackColor', false, this.state.backgroundValue)
    )
  }
  render() {
    return (
      <div className="colback-container size">
        <div className="colors-container ">
          <button
            className="actual-color"
            style={{ backgroundColor: this.state.fontColor }}
          >
            <div></div>
          </button>
          {colorProps[0].colors.map((value, index) => (
            <button
            
              key={`colorValue:${value}`}
              color={value}
              className={`${colorProps[0].classname} color-${index + 1}`}
              onClick={event => this.colorHandler(event)}
            >
              <div></div>
            </button>
          ))}
        </div>
        <div className="colors-container">
          <button
            className="actual-color"
            style={{ backgroundColor: this.state.backgroundValuelor }}
          >
            <div></div>
          </button>
          {backProps[0].colors.map((v, i) => (
            <button
            
              key={`backgroundValue:${v}`}
              color={v}
              className={`${backProps[0].classname} color-${i + 11}`}
              onClick={e => this.backgroundHandler(e)}
            >
              <div></div>
            </button>
          ))}
        </div>
      </div>
    )
  }
}
