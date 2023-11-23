import React from "react";
import "./style.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { BsDatabaseAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  return (
    <div>
      <Navbar className="my-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="my-navtext">
            <img src="logo.png" width="50" height="50" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="justify-content-center my-iconbar">
            <Nav.Link as={Link} to="/new" className="my-navtext">
              <BsDatabaseAdd color="whitesmoke" size={40} className="my-icon" />
            </Nav.Link>
          </Nav>

          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/" className="my-navtext">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="my-navtext">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div class="page-container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div class="d-flex flex-column align-items-center">
              <img className="d-block w-20" src="wave.png" alt="First slide" />
              <Carousel.Caption>
                <h3>Hi I am Ondřej</h3>
                <p>I'm a 19 year SPŠMB student</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="d-flex flex-column align-items-center">
              <img
                className="d-block w-20"
                src="github.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <a
                  href={"https://github.com/LilJanoSik"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>LilJanoSik</h3>
                </a>
                <p>
                  On this github name you can see some of the projects I did for
                  school or in school
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="d-flex flex-column align-items-center">
              <img className="d-block w-20" src="ig.png" alt="Third slide" />
              <Carousel.Caption>
                <a
                  href={"https://www.instagram.com/1janosik1/"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>1janosik1</h3>
                </a>
                <p>This is my instagram profile I will be happy to follow</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="d-flex flex-column align-items-center">
              <img className="d-block w-20" src="email.png" alt="Third slide" />
              <Carousel.Caption>
                <h3>ondrajanosik283@gmail.com</h3>
                <p>
                  If you have any questions, please do not hesitate to contact
                  us at this email address
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <footer className="my-footer text-white fixed-bottom">
        <Container>
          <Row>
            <Col className="text-center">
              <p>LilJanoSik</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default About;
