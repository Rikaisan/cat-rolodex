import './search-box.styles.css';
import React from 'react';

export const SearchBox = ({ placeholder, changeHandler }) => {
	return (
		<input
			className='search-box'
			type='search'
			placeholder={placeholder}
			onChange={changeHandler}
		/>
	);
};
