import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Card.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

function ElfbarCard(props) {
  const randomImageNumber = generateRandomNumber();
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/elfbar/${props._id}`).then(() => {
      setDeleted(true);
    });
  };

  if (deleted) {
    return null;
  }

  return (
    <Card className="my-card">
      <Card.Body class="card-body">
        <div className="my-flag">{props.puffs} puffs</div>
        <Card.Img variant="top" src={`elfbar${randomImageNumber}.png`} />
        <Card.Title className="my-title">{props.name}</Card.Title>
        <Card.Text className="my-text">{props.type} mg</Card.Text>
        <Card.Text className="my-price">{props.price} Czk ,-</Card.Text>
        <Card.Text className="my-description">{props.description}</Card.Text>
        <div className="button-container">
          <Button as={Link} to={`/edit/${props._id}`} className="edit-button">
            Edit
          </Button>
          <Button className="delete-button" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ElfbarCard;
