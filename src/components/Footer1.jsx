import "./Styles/footer.css";
import Container from "react-bootstrap/Container";
import logo from "../assets/Brands/Aster-Pharmacy-Logo-removebg-preview.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

function Footer1() {
  return (
    <>
      <section id="fooot">
        <Container>
          <div className="foot-contents">
            <div className="foot-left">
              <div className="foot-top">
                <img
                  src={logo}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <p>
                  Aster Pharmacy is one of the largest retail pharmacy groups in
                  the middle east and is now present in India. We opened India’s
                  1st friendly neighbourhood pharmacy in February 2021 and are
                  rapidly expanding.
                </p>
              </div>
              <div className="foot-bottom">
                <h6>Office Address</h6>
                <div>
                  <div className="foot-inner">
                    <div className="foot-inner2">
                      <div className="foot-icon">
                        <IoLocationSharp style={{ fontSize: "20px" }} />
                      </div>
                      <div className="inner-cont">
                        <p>
                          Aster Pharmacy, Awfis, Renaissance Centra, 27, 27/1,
                          Kalinga Rao Road, Mission Road Sampangi Ramanagar,
                          Bengaluru, Karnataka 560027
                        </p>
                      </div>
                    </div>

                    <div className="foot-inner">
                      <div className="foot-inner2">
                        <div className="foot-icon">
                          <FaPhoneAlt style={{ fontSize: "20px" }} />
                        </div>
                        <div className="inner-cont">
                          <p>1800-102-3186</p>
                        </div>
                      </div>

                      <div className="foot-inner">
                        <div className="foot-inner2">
                          <div className="foot-icon">
                            <IoIosMail style={{ fontSize: "20px" }} />
                          </div>
                          <div className="inner-cont">
                            <p>customercare@asterpharmacy.in</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="foot-middle">
              <ul>
                <li>Links</li>
                <li>Nearest Pharmacy</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Why Aster Pharmacy</li>
                <li>Carrers</li>
                <li>Partner with us</li>
              </ul>
            </div>
            <div className="foot-right">
              <h6> Stay Connected</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                excepturi ipsa nihil nam atque officiis facere sit, voluptates
                nobis nostrum deleniti eius natus totam aperiam veniam quis hic
                doloribus doloremque!
              </p>

              <div className="foot-input">
                <span>
                <IoMailOutline />
                </span>
                <input
                  type="text"
                  className="footer-mail"
                  placeholder="Enter your email address"
                />
                <span>
                  <FaArrowRight />
                </span>
              </div>
              <div className="follow">
                <h6>Follow Us</h6>
                <ul>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaLinkedinIn />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer1;
