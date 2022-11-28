interface Props {
    scrollHome: any,
    scrollAbout: any,
    scrollProject: any,
    scrollContact: any,
}
const NavBar = (props: Props) => {
    const { scrollHome, scrollAbout, scrollProject, scrollContact } = props;

    return (
        <ul id='nav-bar'>
            <label className="switch"><input type="checkbox" /><div></div></label>
            <li className='nav-links' onClick={scrollHome}>Home</li>
            <li className='nav-links' onClick={scrollAbout}>About</li>
            <li className='nav-links' onClick={scrollProject}>Projects</li>
            <li className='nav-links' onClick={scrollContact}>Contact</li>
        </ul>
  );
}

export default NavBar;
