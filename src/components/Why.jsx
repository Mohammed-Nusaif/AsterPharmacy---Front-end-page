import React from "react";
import "./Styles/why.css";
import Container from "react-bootstrap/Container";
import w4 from "../assets/spotlight/4.jpg";
import w5 from "../assets/Why/fast-delivery.png";
import w1 from "../assets/Why/pharmacist.png";
import w3 from '../assets/Why/pill.png';
import w6 from '../assets/Why/medicine.png';
import w7 from '../assets/Why/stopwatch (1).png';
function Why() {
  return (
    <>
      <section id="why">
        <Container>
          <div className="why-contents">
            <div className="why-left">
              <img src={w4} alt="" />
            </div>
            <div className="why-right">
              <div className="why-top">
                <h3>Why Aster Pharmacy</h3>
                <p>
                  We provide you genuine healthcare products round the clock and
                  <br /> we Aster Pharmacy intend to make your lives easier
                </p>
              </div>
              <div className="why-bottom">
                <div className="why-btm">
                  <div className="whycard">
                    <img src={w1} alt="" />
                  </div>
                  <div className="whycard2">
                    <p>Trained & Caring Pharmacist</p>
                  </div>
                </div>

                <div className="why-btm">
                  <div className="whycard">
                    <img src={w3} alt="" />
                  </div>
                  <div className="whycard2">
                    <p>Genuine Medicines</p>
                  </div>
                </div>
                <div className="why-btm">
                  <div className="whycard">
                    <img src={w5} alt="" />
                  </div>
                  <div className="whycard2">
                    <p>Free Home Delivery</p>
                  </div>
                </div>
                <div className="why-btm">
                  <div className="whycard">
                    <img src={w6} alt="" />
                  </div>
                  <div className="whycard2">
                    <p>Exhaustive Range of Products</p>
                  </div>
                </div>
                <div className="why-btm">
                  <div className="whycard">
                    <img src={w7} alt="" />
                  </div>
                  <div className="whycard2">
                    <p>Medicine Refill Reminders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Why;
