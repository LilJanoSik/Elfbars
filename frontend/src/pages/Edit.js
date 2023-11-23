import React, { useRef, useEffect } from "react";
import "./style.css";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { BsDatabaseAdd } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const nameRef = useRef();
  const typeRef = useRef();
  const puffsRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  const handleEdit = (event) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const type = typeRef.current?.value;
    const puffs = puffsRef.current?.value;
    const price = priceRef.current?.value;
    const description = descriptionRef.current?.value;

    axios
      .put(`http://localhost:3000/elfbar/${id}`, {
        name,
        type,
        puffs,
        price,
        description,
      })
      .then(() => navigate("/"));

    nameRef.current.value = "";
    typeRef.current.value = "";
    puffsRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/elfbar/${id}`).then((res) => {
      nameRef.current.value = res.data.name;
      typeRef.current.value = res.data.type;
      puffsRef.current.value = res.data.puffs;
      priceRef.current.value = res.data.price;
      descriptionRef.current.value = res.data.description;
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
        <Container className="text-center">
          <Row>
            <Col>
              <Form onSubmit={handleEdit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Peach Elfbar"
                    ref={nameRef}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Nicotine</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="20"
                    ref={typeRef}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Puffs</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="600"
                    ref={puffsRef}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAddress">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="240"
                    ref={priceRef}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Strong elfbar not for beginners"
                    ref={descriptionRef}
                    required
                  />
                </Form.Group>

                <Button className="submit-button" type="primary">
                  Edit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
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

export default Edit;
