const HeaderTop = ({ setToggle, toggle }) => {
  return (
  <div className="header-top">
    <div 
  onClick={() => setToggle((prev) => !prev)}
    className="header-top-menu">
    {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
    </div>
    <div className="header-top-phone">
    <i className="bi bi-telephone"></i>
      044-45361290
    </div>
    <div className="header-top-link">
    <i className="bi bi-person-circle"></i>
  <b>Login</b>
    </div>
  
    </div> );
}
 
export default HeaderTop ;