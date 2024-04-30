import Container from "react-bootstrap/Container";
import "./Styles/spotlight.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import offers from "../assets/spotlight/2.jpg";
import baby from "../assets/spotlight/1.jpg";

function Spotlight() {
  return (
    <>
      <section id="spotlight">
        <Container>
          <div className="spot-content">
            <div className="spot-left">
              {/* here we use splide for slider */}
              <Splide
                aria-label="My Favorite Images"
                options={{
                  rewind: true,
                  width: 600,
                  height: 459,
                  gap: "1rem",
                }}
              >
                <SplideSlide>
                  <div className="overlay">
                    <h2>MEGA WINTER OFFERS</h2>
                    <p>
                      Shop for 899* or above, and get Vaseline Lip Care (10 gms)
                      + Vaseline Intensive Care Aloe Fresh (100 ml) + Aster
                      Pharmacy Foot Care Cream (50gms) free
                    </p>
                    <button className="btn overlay_btn"> Order Now</button>
                  </div>
                  <img src={offers} alt="Image 1" className="offer_img" />
                </SplideSlide>
                <SplideSlide>
                  <img src={baby} alt="Image 2" />
                </SplideSlide>
              </Splide>
            </div>

            <div className="spot-middle">
              <div className="spot-up">
                <p>Get Flat</p>
                <h2>15% Off</h2>
                <p>on first 3 medicine orders</p>
                <button className="btn btn2">Order Now</button>
              </div>
              <div className="spot-down">
                <p>Locate Nearest</p>
                <h2>Pharmacy</h2>
                <p>Get genuine medicines round the clock</p>
                <button className="btn btn2">Search Now</button>
              </div>
            </div>
            <div className="spot-right">
              <div className="overlay2">
                <h6>BABY CARE PRODUCTS</h6>
                <p>Shop for 899* or above, and get 10% Off</p>
                <button className="btn ">Order Now</button>
              </div>
              <img src={baby} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Spotlight;
