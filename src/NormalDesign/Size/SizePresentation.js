import React from 'react'
export default class SizeComponent extends React.PureComponent{
  render(){
    return (
    <div className="third-line-items size" id="invalid">
      <p className="default" id="invalid">
        Size
      </p>
      <button className="default" onClick={this.props.one} id="invalid">
        <p>1</p>
      </button>
      <button className="default" onClick={this.props.two} id="invalid">
        <p>2</p>
      </button>
      <button className="default" onClick={this.props.three} id="invalid">
        <p>3</p>
      </button>
      <button className="default" onClick={this.props.four} id="invalid">
        <p>4</p>
      </button>
      <button className="default" onClick={this.props.five} id="invalid">
        <p>5</p>
      </button>
      <button className="default" onClick={this.props.nine} id="invalid">
        <p>9</p>
      </button>
    </div>
  )
  }
}
