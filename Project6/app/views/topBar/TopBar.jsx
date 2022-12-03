import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './TopBar.css';

class TopBar extends React.Component {
	render() {
		return (
		<AppBar position="static">
        	<Toolbar className="cse4050-toolbar">
        		<Typography variant="h6" className="cse4050-logo">
        			Kanban Board
        		</Typography>
        	    <Stack
					direction="row"
					spacing={2}
					sx={{ '& a.active': {color:theme=>theme.palette.primary.contrastText, bgcolor:theme=>theme.palette.primary.main, } }}
				>
					<Button variant='contatined'>
						<NavLink to="/">
							Home
						</NavLink>
					</Button>

						<Button variant='contained' href='/'>Home</Button>
						<Button variant='contained' href='/tasks'>Task</Button>
				</Stack>
			</Toolbar>
		</AppBar>
		);
	}
}
export default TopBar;
