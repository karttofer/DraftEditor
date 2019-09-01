import React from 'react'
import FirstLinePresentation from './FirstLinePresentation'
import './style.css'
export default class FirstLineLogic extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			link : '',
			isLink : false,
			select : {}
		};
		this.getSelect = this.getSelect.bind(this);
		this.leftAlign = this.leftAlign.bind(this);
		this.rightAlign = this.rightAlign.bind(this);
		this.centerAlign = this.centerAlign.bind(this);
		this.createLink = this.createLink.bind(this);
		this.removeFormat = this.removeFormat.bind(this);
		this.getLink = this.getLink.bind(this);
	}
	componentDidMount(){
		setInterval(() => {
			if(document.getSelection().toString()){
				
				this.getSelect()
			}
		}, 100);
	};
	getSelect(){
		this.setState({
			select : window.getSelection().getRangeAt(0)
		})
	};
	leftAlign(){
		document.execCommand("justifyLeft",false,null);
	};
	rightAlign(){
		document.execCommand("justifyRight",false,null);
	};
	centerAlign(){
		document.execCommand("justifyCenter",false,null);
	};
	createLink(e){
		if(e.key == 'Enter' && this.state.link){
			let element = document.createElement("a")
			element.href = this.state.link
			this.state.select.surroundContents(element)
		}
	};
	removeFormat(){
		document.execCommand("removeFormat",false,null);
	};
	getLink(e){
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