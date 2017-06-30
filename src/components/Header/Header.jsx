import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Play from 'material-ui/svg-icons/av/play-arrow'
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {



	return (
			<header className="header">
				<AppBar
						title="Films"
						iconElementLeft={<IconButton><Link to="/"><Play/></Link></IconButton>}
				/>
			</header>
	);

}

export default Header;