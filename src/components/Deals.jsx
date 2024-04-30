import "./Styles/deals.css";
import Container from "react-bootstrap/Container";
import d1 from "../assets/Limited Deals/1.png";
import d2 from "../assets/Limited Deals/2.png";
import d3 from "../assets/Limited Deals/3.png";
import d4 from "../assets/Limited Deals/4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

function Deals() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <>
      <section id="Deals">
        <Container>
          <div className="deal-contents">
            <div className="deal-top">
              <h2>Limited Time Deals</h2>
              <p>
                Get additional benefits from our wide range of healthcare
                products, only available for a limited period of time
              </p>
            </div>
            <div className="deal-bottom">
              <Slider {...settings}>
                <div className="deal-card">
                  <img src={d1} alt="" className="d1-img" />
                  <div className="dcard">
                    <div className="dcard-left">
                      <p>Baby Care</p>
                      <h6>
                        Get upto <span>40% Off</span> on Himalaya Products
                      </h6>
                    </div>
                    <div className="dcard-right">
                      <img src={d2} alt="" />
                    </div>
                  </div>
                  <div className="dcard-bottom"></div>
                </div>

                <div className="deal-card">
                  <img src={d3} alt="" className="d1-img" />
                  <div className="dcard">
                    <div className="dcard-left">
                      <p>Baby Care</p>
                      <h6>
                        Mom’s No.1 Choice for Comfort <br /> Get upto{" "}
                        <span>Rs.200 Off *</span>
                      </h6>
                    </div>
                    <div className="dcard-right">
                      <img src={d4} alt="" />
                    </div>
                  </div>
                  <div className="dcard-bottom"></div>
                </div>

                <div className="deal-card">
                  <img src={d1} alt="" className="d1-img" />
                  <div className="dcard">
                    <div className="dcard-left">
                      <p>Baby Care</p>
                      <h6>
                        Get upto <span>40% Off</span> on Himalaya Products
                      </h6>
                    </div>
                    <div className="dcard-right">
                      <img src={d2} alt="" />
                    </div>
                  </div>
                  <div className="dcard-bottom"></div>
                </div>
                <div className="deal-card">
                  <img src={d3} alt="" className="d1-img" />
                  <div className="dcard">
                    <div className="dcard-left">
                      <p>Baby Care</p>
                      <h6>
                        Mom’s No.1 Choice for Comfort <br /> Get upto{" "}
                        <span>Rs.200 Off *</span>
                      </h6>
                    </div>
                    <div className="dcard-right">
                      <img src={d4} alt="" />
                    </div>
                  </div>
                  <div className="dcard-bottom"></div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Deals;
