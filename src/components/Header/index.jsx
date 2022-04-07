import React from 'react';
import HeaderContent from '../../containers/HeaderContent';
import NavBar from '../../containers/NavBar';
import './style.css'

function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <NavBar />
                <HeaderContent />
            </div>
        </div>
    )
}

export default Header;