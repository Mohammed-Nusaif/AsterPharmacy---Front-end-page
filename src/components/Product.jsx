import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Styles/Product.css";
import p1 from "../assets/Product Range/1.png";
import p2 from "../assets/Product Range/2.png";
import p3 from "../assets/Product Range/3.png";
import p4 from "../assets/Product Range/4.png";
function Product() {
  return (
    <>
      <section id="product">
        <Container>
          <div className="product-contents">
            <div className="product-top">
              <h2>Our Product Range</h2>
              <p>
                We provide genuine and quality healthcare products and our wide
                range of products ensures we provide everything for all your{" "}
                <br />
                healthcare needs
              </p>
            </div>
            <div className="product-middle">
              <ul>
                <li>Aster Products</li>
                <li>Medicine</li>
                <li>Baby Care</li>
                <li>Personal Care</li>
                <li>Sports nutrition</li>
                <li>Medical Devices</li>
              </ul>
            </div>
            <div className="product-bottom">
              <div style={{ width: "15rem" }} className="p-card"> 
                <Card.Img variant="top" src={p1} className="card-img" />
                <Card.Body>
                  <p>Baby Care</p>
                  <h6>
                    {" "}
                    Pampers Pure Protection Diapers Size 6 35+ lbs 42 ct pkg
                  </h6>
                </Card.Body>
              </div>
              <div style={{ width: "15rem" }} className="p-card"> 
                <Card.Img variant="top" src={p2} className="card-img" />
                <Card.Body>
                  <p>Baby Care</p>
                  <h6>
                    {" "}
                    Pampers Pure Protection Diapers Size 6 35+ lbs 42 ct pkg
                  </h6>
                </Card.Body>
              </div>
              <div style={{ width: "15rem" }} className="p-card"> 
                <Card.Img variant="top" src={p3} className="card-img" />
                <Card.Body>
                  <p>Baby Care</p>
                  <h6>
                    {" "}
                    Pampers Pure Protection Diapers Size 6 35+ lbs 42 ct pkg
                  </h6>
                </Card.Body>
              </div>
              <div style={{ width: "15rem" }} className="p-card"> 
                <Card.Img variant="top" src={p4} className="card-img" />
                <Card.Body>
                  <p>Baby Care</p>
                  <h6>
                    {" "}
                    Pampers Pure Protection Diapers Size 6 35+ lbs 42 ct pkg
                  </h6>
                </Card.Body>
              </div>
              
            </div>
            <div className="p-btn">
                <button className="btn">view all</button>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Product;
