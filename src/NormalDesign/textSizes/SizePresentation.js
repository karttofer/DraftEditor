import React from 'react'
export default class SizeComponent extends React.PureComponent {
  render() {
    return (
      <div className="third-line-items size" >
        <p className="default" >
          Size
        </p>
        <button className="default" onClick={this.props.one} >
          <p>1</p>
        </button>
        <button className="default" onClick={this.props.two} >
          <p >2</p>
        </button>
        <button className="default" onClick={this.props.three} >
          <p >3</p>
        </button>
        <button className="default" onClick={this.props.four} >
          <p >4</p>
        </button>
        <button className="default" onClick={this.props.five} >
          <p >5</p>
        </button>
        <button className="default" onClick={this.props.nine} >
          <p >9</p>
        </button>
      </div>
    )
  }
}
