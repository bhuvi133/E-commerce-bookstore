import "./footer.css";

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="footer-social-media">
            <div className="footer-social-media-text">
              Follow us on Social media</div>
<div className="footer-social-media-icons">

    <div className="footer-social-media-icon">
    <i style={{ color: "red" }} class="bi bi-instagram"></i>
    </div>

    <div className="footer-social-media-icon">
    <i  style={{ color: "red" }} class="bi bi-youtube"></i>
    </div>

    <div className="footer-social-media-icon">
    <i style={{ color: "#2980b9" }} class="bi bi-facebook"></i>
    </div>

    <div className="footer-social-media-icon">
    <i style={{ color: "skyblue" }} class="bi bi-twitter"></i>
    </div>
</div>
        </div>
        <div className="footer-links-wrapper">
        <div className="footer-links-item">
            <h3 className="footer-links-item-title"> Links to Pages </h3>
            <u1 className="footer-links">
             <li className="footer-link"> Home</li>
             <li className="footer-link"> Author</li>
             <li className="footer-link"> About us</li>
             <li className="footer-link"> Contact us</li>
             <li className="footer-link"> Register</li>
            </u1>
        </div>
        </div>
        <div className="footer-links-item">
            <h3 className="footer-links-item-title"> Contact Details</h3>
            <div className="footer-address-wrapper">
                <div className="footer-address-item">
                <i class="bi bi-geo-fill"></i>
               Park-Avenue-Coimbatore
                </div>
         

            <div className="footer-address-item">
            <i class="bi bi-telephone-fill"></i>
               0422 4325679
                </div>
                <div className="footer-address-item">
                <i class="bi bi-envelope-fill"></i>
              info@bookly.com
                </div>
        </div>

        </div>
        <div className="footer-links-item">
            <h3 className="footer-links-item-title"> About Us </h3>
         <div className="footer-description">
         You'll receive a confirmation and tracking number when your order is placed, and our in-house customer service team will be standing by if you have issues or returns.
         Our mission is simple: To help local, independent bookstores thrive in the age of ecommerce.
         </div>
        </div>
    </footer> );
}
 
export default Footer;