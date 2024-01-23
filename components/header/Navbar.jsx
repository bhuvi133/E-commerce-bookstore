const Navbar = ({toggle,setToggle}) => {
    return ( 
    <nav style={{left: toggle && "0"}}className="navbar">
        <u1 className="navbar-links">
            <li  onClick={()=> setToggle(false)} className="navbar-link">Home</li>
            <li onClick={()=> setToggle(false)} className="navbar-link">Authors</li>
            <li onClick={()=> setToggle(false)} className="navbar-link">About us</li>
            <li onClick={()=> setToggle(false)} className="navbar-link">Contact us</li>
            <li  onClick={()=> setToggle(false)} className="navbar-link">Register</li>
        </u1>
    </nav> );
}
 
export default Navbar;