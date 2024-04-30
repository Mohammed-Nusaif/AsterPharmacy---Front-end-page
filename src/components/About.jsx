import React from "react";
import Container from "react-bootstrap/Container";
import "./Styles/about.css";
import a3 from "../assets/spotlight/3.jpg";

function About() {
  return (
    <>
  <section id="About">
        <div className="about-overlay">
          <Container>
            <div className="abt-contents">
              <div className="abt-h5">
                <h5>About US</h5>
              </div>
              <h1>Your Friendly Neighbourhood Pharmacy</h1>
              <p>
                Aster Pharmacy is one of the largest retail pharmacy groups in
                the middle east and is now present in India. We opened India’s
                1st friendly neighbourhood pharmacy in February 2021 and are
                rapidly expanding.
              </p>
              <button className="about-btn">View More</button>
            </div>
          </Container>
        </div>
      </section>
      <div className="count">
        <div className="outlet">
          <h2>144</h2>
          <p>Outlets Across India</p>
        </div>
        <div className="care">
          <h2>35</h2>
          <p>Years of Care & Experience</p>
        </div>
        <div className="order">
          <h2>12m</h2>
          <p>Orders Delivered</p>
        </div>
        <div className="customer">
          <h2>19.5m</h2>
          <p>Customers in Year</p>
        </div>
      
    </div> 

    </>
  );
}

export default About;
