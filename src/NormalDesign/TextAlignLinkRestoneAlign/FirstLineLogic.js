import React from 'react'
import FirstLinePresentation from './FirstLinePresentation'
import './style.css'
export default class FirstLineLogic extends React.Component{
	state = {
		link : '',
		isLink : false,
		select : {}
	};
	componentDidMount = () => {
		setInterval(() => {
			if(document.getSelection().toString()){
				
				this.getSelect()
			}
		}, 100);
	};
	getSelect = () => {
		this.setState({
			select : window.getSelection().getRangeAt(0)
		})
	};
	leftAlign = () => {
		document.execCommand("justifyLeft",false,null);
	};
	rightAlign = () => {
		document.execCommand("justifyRight",false,null);
	};
	centerAlign = () => {
		document.execCommand("justifyCenter",false,null);
	};
	createLink = e => {
		if(e.key == 'Enter' && this.state.link){
			let element = document.createElement("a")
			element.href = this.state.link
			this.state.select.surroundContents(element)
		}
	};
	removeFormat = () => {
		document.execCommand("removeFormat",false,null);
	};
	getLink = e => {
		this.setState({
			link : e.target.value
		})
		console.log(e.key)
	};
	render(){
		return(
				<FirstLinePresentation left={ this.leftAlign } right={ this.rightAlign } center={ this.centerAlign }
				onPress={e => this.createLink(e) } clean={ this.removeFormat } change={e  => this.getLink(e) }/>
		)
	}
}