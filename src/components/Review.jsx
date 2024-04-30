import "./Styles/review.css";
import Container from "react-bootstrap/Container";
import s1 from "../assets/Stars/Icon material-star-border.png";
import s2 from "../assets/Stars/Icon material-star-half.png";
import s3 from "../assets/Stars/Icon material-star.png";
import Slider from "react-slick";

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <section id="review">
        <Container>
          <div className="rev-contents">
            <div className="rev-top">
              <div className="rev-left">
                <h2>What Our Client Says</h2>
                <p>
                  Our Clients send us bunch of smilies with our services and we
                  love them
                </p>
              </div>
              <div className="rev-right">
                <button className="rev-btn">Write a Review</button>
              </div>
            </div>
            <Slider {...settings}>
                <div className="rev bottom">
                  <div className="rev-cards">
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s2} alt="" />
                        </li>
                        <li>
                          <img src={s1} alt="" />
                        </li>
                      </ul>
                    </div>
                    <div className="c-middle">
                      <p>
                        I am extremely grateful for Aster Pharmacy for
                        delivering the medicines right on time.
                      </p>
                    </div>
                    <div className="c-bottom">
                      <span>Johnson Ray</span>
                      <p>Mumbai</p>
                    </div>
                  </div>
                </div>

                <div className="rev bottom">
                  <div className="rev-cards">
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s2} alt="" />
                        </li>
                        <li>
                          <img src={s1} alt="" />
                        </li>
                      </ul>
                    </div>
                    <div className="c-middle">
                      <p>
                        I am extremely grateful for Aster Pharmacy for
                        delivering the medicines right on time.
                      </p>
                    </div>
                    <div className="c-bottom">
                      <span>Johnson Ray</span>
                      <p>Mumbai</p>
                    </div>
                  </div>
                </div>

                <div className="rev bottom">
                  <div className="rev-cards">
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s2} alt="" />
                        </li>
                        <li>
                          <img src={s1} alt="" />
                        </li>
                      </ul>
                    </div>
                    <div className="c-middle">
                      <p>
                        I am extremely grateful for Aster Pharmacy for
                        delivering the medicines right on time.
                      </p>
                    </div>
                    <div className="c-bottom">
                      <span>Johnson Ray</span>
                      <p>Mumbai</p>
                    </div>
                  </div>
                </div>

                <div className="rev bottom">
                  <div className="rev-cards">
                    <div className="stars">
                      <ul>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s3} alt="" />
                        </li>
                        <li>
                          <img src={s2} alt="" />
                        </li>
                        <li>
                          <img src={s1} alt="" />
                        </li>
                      </ul>
                    </div>
                    <div className="c-middle">
                      <p>
                        I am extremely grateful for Aster Pharmacy for
                        delivering the medicines right on time.
                      </p>
                    </div>
                    <div className="c-bottom">
                      <span>Johnson Ray</span>
                      <p>Mumbai</p>
                    </div>
                  </div>
                </div>
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Review;
