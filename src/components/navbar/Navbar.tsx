import './navbar.scss';
import logo from '../../images/netflex.png';
import userIcon from '../../images/userIcon.png';
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons';
import { useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    console.log(isScrolled);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className="left">
                    <img className="logo" src={logo} alt='logo' />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movie</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src={userIcon} alt="userIcon" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar