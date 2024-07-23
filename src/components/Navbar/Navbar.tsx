import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavbarInterface = {
	// types...
}

const Navbar: React.FC<NavbarInterface> = ({ }) => {
	return (

		<AppBar position="fixed">
			<Toolbar>
				
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Gentleman Programming
				</Typography>
				
			</Toolbar>
		</AppBar>

	);
};

export default Navbar;
