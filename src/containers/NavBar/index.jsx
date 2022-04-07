import './style.css'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className='navbar-logo'>
                    <img src="src\images\headerLogo.svg" alt="" />
                </div>
                <a href='/' target='_blank'>Create Your Nanny Share</a>
                <a href='/' target='_blank'>Browse Shares</a>
                <a href='/' target='_blank'>Our Story</a>
            </div>
            <div className='navbar-container-rightside'>
                <button>Become a Nanny Share Host</button>
                <a href='/' target='_blank'>Sign In</a>
            </div>
        </nav>

    )
}

export default NavBar;