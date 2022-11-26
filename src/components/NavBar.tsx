function NavBar() {
    return (
        <ul id='nav-bar'>
            <label className="switch"><input type="checkbox" /><div></div></label>
            <li className='nav-links'>Home</li>
            <li className='nav-links'>About</li>
            <li className='nav-links'>Projects</li>
            <li className='nav-links'>Contact</li>
        </ul>
  );
}

export default NavBar;
