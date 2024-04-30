import Logo from "../assets/Brands/Aster-Pharmacy-Logo-removebg-preview.png";
import "./Styles/Navbar.css";
import Container from "react-bootstrap/Container";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
function Navbar() {
  return (
    <>
    {/* contacts */}
      <div className="contacts">
          <Container>
            <div className="conc-contents">
              <ul>
                <li><span><FaFacebookF/></span></li>
                <li><span><FaInstagram /></span></li>
                <li><span><FaLinkedinIn /></span></li>
                <li><span><FaYoutube /></span></li>
                <li><span><FaTwitter /></span></li>
                <li><span>| &nbsp; FREE HOME DELIVERY</span></li>
                <li><span><FaWhatsapp />+91 89044 19944</span></li>
              </ul>
            </div>
          </Container>
      </div>
    {/* nav-bar */}
      <div className="nav-bar">
        <Container>
          <div className="nav-content">
            <div className="Logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="middle-nav">
              <ul>
                <li>Nearest Pharmacy</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Why Aster Pharmacy</li>
                <li>Carrers</li>
                <li>Own Franchise</li>
                <li>How to Order?</li>
              </ul>
            </div>
            <div className="right">
              <button className="btn">Request Call Back?</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
