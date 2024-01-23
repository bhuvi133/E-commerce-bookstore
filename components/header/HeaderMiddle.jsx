const HeaderMiddle= () => {
    return ( <div className="header-middle">
    <div className="header-midddle-logo">
       <b> BOOKly </b>
       <i class="bi bi-book-half"></i>
    </div>
    <div className="header-middle-search-box">
    <input className="header-middle-search-input" type="search" placeholder="Search by book name..." />
    <i class="bi bi-search"></i>
 </div>
 <div className="header-middle-cart-wrapper">
<i className="bi bi-cart"></i>

</div>
 

 </div> );
}
 
export default HeaderMiddle;