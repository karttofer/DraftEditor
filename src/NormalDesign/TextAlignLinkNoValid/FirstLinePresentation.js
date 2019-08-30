import React from 'react'
import LeftICon from '../icons/LeftICon'
import RightICon from '../icons/RightICon'
import CenterIcon from '../icons/CenterIcon'
import FormatClean from '../icons/FormatCleanIcon'
import LinkIcon from '../icons/LinkIcon'
const AlignOptions = ({ left, center, right, link, change , clean, onPress }) => {
	return(
		<div className='first-line-items size'>
			<button onClick={ left } >
				<LeftICon/>
			</button>
			<button onClick={ center } >
				<CenterIcon/>
			</button>
			<button onClick={ right } >
				<RightICon/>
			</button>
			<button onClick={ link } className='link-button' >
				<LinkIcon/>
				<div className='link-text-windows'>
					<input type='text' placeholder='...url' onChange={ change } onKeyPress={ onPress } />
					<div></div>
				</div>
			</button>
			<button onClick={ clean } >
				<FormatClean/>
			</button>
		</div>
	)
};
export default AlignOptions