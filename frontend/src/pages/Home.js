import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { BsDatabaseAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import ElfbarCard from "../components/ElfbarCard";

const Home = () => {
  const [elfbars, setElfbars] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/elfbar").then((res) => {
      setElfbars(res.data.elfbars);
    });
  }, []);

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
        <div className="card-container justify-content-start">
          {elfbars &&
            elfbars.map((elfbar, index) => (
              <ElfbarCard {...elfbar} key={index} />
            ))}
        </div>
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
export default Home;
