import React from 'react';

const SingleComment = (props) => {
	return (
		<div className='comment'>
			<a href="/" className='avatar'>
				<img src={props.picture} alt="profile" />
			</a>
			<div className='content'>
				<a href="/" className='author'>
					{ props.name }
				</a>
				<div className='metadata'>
					<span className='date'>
						{ props.date }
					</span>
				</div>
				<div className='text'>
					{ props.text }
				</div>
			</div>
		</div>
	)
}

export default SingleComment;
