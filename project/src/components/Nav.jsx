import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './nav.css';
import LanguageIcon from '@mui/icons-material/Language';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { useNavigate } from 'react-router';

const settings =['English','Fresh','Itali','Deustch']


const ResponsiveAppBar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className='nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className="navbar">
  <div className="subnav">
    <button className="subnavbtn">About <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#company">Company</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
    </div>
  </div> 
  <div className="subnav">
    <button className="subnavbtn">Services <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
  </div> 
  <div className="subnav">
    <button className="subnavbtn">Partners <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>
  <div className="subnavbtn">Contact</div>
</div>

          <Typography
            variant="p"
            noWrap
            component="div"
            color='black'
            classNameName='chimp'
            sx={{ ml: 24, display: { xs: 'none',md:'flex'  },  }}
          >
         <img src='data:image/png;base64,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' alt=''/>
          </Typography>
          <Box sx={{ flexGrow: 0,ml:20 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="p"
            noWrap
            component="div"
            color='black'
            classNameName='chimp'
            sx={{ ml:2, display: { xs: 'none',md:'flex'  },  }}
          >
         <SavedSearchIcon />
          </Typography>
          <div
            style={{
              marginLeft: "2rem",
              color: "#241C15",
              marginTop: "-.8rem",
            }}
          >
            <button
              style={{
                padding: "10.5px 31px",
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: "14px",
                color: "#241C15",
                lineHeight: "15px",
                border: " 0.8px solid #241C15",
                background: "transparent",
              }}
            >
              Log In
            </button>
          </div>
          <div style={{ marginLeft: "2rem", marginTop: "-1rem" }}>
            <button
             
              style={{
                padding: "10px 28px",
                background: " #007C89",
                color: "#FFF",
                border: "none",
              }}
            >
              Sign Up
            </button>
          </div>
         
        </Toolbar>
      </Container>
    </AppBar>
   
          
  );

};
export default ResponsiveAppBar;