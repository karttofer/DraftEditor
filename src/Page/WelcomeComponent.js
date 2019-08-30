import React from 'react'
import './style.css'
const WelcomeComponent = () => {
	return(
		<div className='page-container'>
			<h1 contentEditable suppressContentEditableWarning={true}>
				This page was created <span className='for-you'>for you</span>, if you want you can try changing this text...Yeah, you can change it 🙀. This project was create just to show you that <span className='react-isAmazing'>React is amazing!</span>, so let's started 🤗...
			</h1>
			<div className='npm-container'>
				<p>You can use npm:</p>
				<p className='npm-text'> npm i drafty-editor </p>
				<p>Ey, you can use dev too:</p>
				<p className='npm-text-dev'> npm i --save-dev drafty-editor</p>
			</div>
		</div>
	)
};
export default WelcomeComponent