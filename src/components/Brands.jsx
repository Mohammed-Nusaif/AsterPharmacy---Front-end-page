import "./Styles/brands.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import nivia from "../assets/Brands/1.png";
import b2 from '../assets/Brands/2.png';
import b3 from '../assets/Brands/3.png';
import b4 from '../assets/Brands/4.png';
import b5 from '../assets/Brands/5.png';
function Brands() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <>
      <section id="brands">
        <Container>
          <div className="brand-contents">
            <div className="brand-top">
              <h2>Featured Brands</h2>
              <p>
                Your-go-to online pharmacy store is home to some of the most
                recognized and trusted brands.
              </p>
            </div>

            <div className="bottom">
              <Slider {...settings}>
                <div >
                  <div className="bcard bnivia">
                    <div className="b-left">
                      <img src={nivia} alt="" />
                    </div>
                    <div className="b-right">
                      <h6>Nivia</h6>
                    </div>
                  </div>
                </div>

                <div >
                  <div className="bcard b2">
                    <div className="b-left">
                      <img src={b2} alt="" />
                    </div>
                    <div className="b-right">
                      <h6 style={{fontSize:"13px", marginLeft:"15px"}}>MAMA EARTH</h6>
                    </div>
                  </div>
                </div>

                <div >
                  <div className="bcard b3">
                    <div className="b-left">
                      <img src={b3} alt="" />
                    </div>
                    <div className="b-right">
                      <h6>HIMALAYA</h6>
                    </div>
                  </div>
                </div>

                <div >
                  <div className="bcard b4">
                    <div className="b-left">
                      <img src={b4} alt="" />
                    </div>
                    <div className="b-right">
                      <h6>HUGGIES</h6>
                    </div>
                  </div>
                </div>

                <div >
                  <div className="bcard b5">
                    <div className="b-left">
                      <img src={b5} alt="" />
                    </div>
                    <div className="b-right">
                      <h6>SAVLON</h6>
                    </div>
                  </div>
                </div>

                <div >
                  <div className="bcard bnivia">
                    <div className="b-left">
                      <img src={nivia} alt="" />
                    </div>
                    <div className="b-right">
                      <h6>Nivia</h6>
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Brands;
