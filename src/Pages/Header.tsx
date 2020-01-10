import React from 'react';
import {
    Link
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';

export default function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <MenuItem component={Link} to="/">Home</MenuItem>
                    <MenuItem component={Link} to="/login">Login</MenuItem>
                </Toolbar>
            </AppBar>
        </div>
    )
}