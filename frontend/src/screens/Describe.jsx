import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/describe.css";
import { useNavigate } from "react-router-dom";
export default function Describe() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={6} className="hero-text pt-4">
            <h1>
              All Fast Food is Available at{" "}
              <span className="brand-name">Savor Haven</span>
            </h1>
            <p>
              We Are Just A Click Away When You Crave For Delicious Fast Food
            </p>
            <div className="hero-buttons">
              <Button
                variant="danger"
                onClick={() => {
                  navigate("/cart");
                }}
                className="buy-now-btn"
              >
                Buy Now
              </Button>
            </div>
          </Col>
          <Col md={6} className="hero-image p-4">
            <img
              src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.194249722.1721923014&semt=sph"
              alt="Delicious Food"
            />
          </Col>
        </Row>
        <Row className="hero-info">
          <Col md={4}>
            <div className="info-box">
              <FontAwesomeIcon icon={faTruck} />
              <h5>Fast Delivery</h5>
              <p>
                Your Food Will Be Delivered To Your Home Within 1-2 Hours Of
                Your Ordering
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-box">
              <FontAwesomeIcon icon={faLeaf} />
              <h5>Fresh Food</h5>
              <p>
                Your Food Will Be Delivered 100% Fresh To Your Home. We Do Not
                Deliver Stale Food
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-box">
              <FontAwesomeIcon icon={faTruckFast} />
              <h5>Free Delivery</h5>
              <p>
                Your Food Delivery Is Absolutely Free. No Cost Just Order And
                Enjoy
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// return (
//   <div className="container mt-5">
//     <div className="row">
//       <div className="col-lg-12 col-md-12 col-sm-12">
//         <h1 className="d-flex justify-content-center align-items-center m-3 mt-2">
//           Welcome to "Savor Haven"
//         </h1>
//         <p>
//           Welcome to "Savor Haven" – Where Taste Meets Elegance At Savor
//           Haven, we take pride in offering an exceptional culinary experience
//           that tantalizes your taste buds and elevates dining to an art form.
//           Our website is an inviting digital gateway to the culinary world
//           we've crafted. Here's a detailed glimpse into what you can expect
//           when you visit:
//         </p>

//         <p className="mt-2">
//           Our menu section is a gastronomic journey in itself. Each dish is
//           showcased with high-definition images, detailed descriptions, and
//           perhaps a short story behind its creation. Categories are neatly
//           organized – appetizers, entrees, desserts, and drinks. A
//           user-friendly filter system allows visitors to sort by dietary
//           preferences, ingredients, or meal types.
//         </p>
//       </div>
//     </div>
//   </div>
// );
