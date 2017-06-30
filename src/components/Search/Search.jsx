import React from 'react';
import './Search.css';

function Header({children}) {

	return (
			<div className="search">
				{children}
			</div>
	);

}

export default Header;