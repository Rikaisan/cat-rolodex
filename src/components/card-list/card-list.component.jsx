import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = ({ monsters, searchFilter }) => {
	const filter = searchFilter.trim().toLowerCase();
	monsters = monsters.filter((monster) =>
		monster.name.toLowerCase().includes(filter)
	);

	return (
		<div className='card-list'>
			{monsters.map((monster) => (
				<Card monster={monster} key={monster.id} />
			))}
		</div>
	);
};
