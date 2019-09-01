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
export default class Colors extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fontColor : '#000000',
      backColor : '#000000'
    }

    this.colorF = this.colorF.bind(this);
    this.backCo = this.backCo.bind(this);
  }
  colorF(e){
     this.setState({
      fontColor : e.target.attributes[0].nodeValue
    }, () => (document.execCommand('foreColor', false, this.state.fontColor)))
  }
  backCo(e){
     this.setState({
      backColor : e.target.attributes[0].nodeValue
    }, () => (document.execCommand('BackColor', false, this.state.backColor)))
  }
  render(){
    return (
    <div className="colback-container size">
      <div className="colors-container ">
        <button className="actual-color" style={{ backgroundColor: this.state.fontColor }}>
          <div></div>
        </button>
        {colorProps[0].colors.map((v, i) => (
          <button
            key={`ColorF:${v}`}
            color={v}
            className={`${colorProps[0].classname} color-${i + 1}`}
            onClick={e => this.colorF(e)}
          >
            <div></div>
          </button>
        ))}
      </div>
      <div className="colors-container">
        <button className="actual-color" style={{ backgroundColor: this.state.backColor }}>
          <div></div>
        </button>
        {backProps[0].colors.map((v, i) => (
          <button
            key={`Backprop:${v}`}
            color={v}
            className={`${backProps[0].classname} color-${i + 11}`}
            onClick={e => this.backCo(e)}
          >
            <div></div>
          </button>
        ))}
      </div>
    </div>
  )
  }
}