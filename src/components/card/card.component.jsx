import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
	return (
		<div className='card'>
			<img
				src={`https://robohash.org/${monster.id}?set=set4`}
				alt='Profile Icon'
			/>
			<h2>{monster.name || 'Gatito'}</h2>
			<p>{monster.email}</p>
		</div>
	);
};
