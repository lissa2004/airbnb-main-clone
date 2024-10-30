import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';

const Header = () => {
  return (
<div className="nav">
    <div className="header_top">
        <img src="https://pluspng.com/img-png/airbnb-logo-png-is-airbnb-safe-what-the-homestay-app-does-to-make-hosts-and-guests-secure-in-their-use-780.png"className="header_logo"alt="logo" />
    <div className="header_middle">
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
    </div>
    <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />
        <div className="header_rightIcons">
           <MenuIcon />
           <AccountCircleIcon />
        </div>  
    </div>
    </div>
    <div className="header_bottom">
        <input type="text" />
        <SearchIcon /> 
    </div>
    
</div>
  )
}

export default Header