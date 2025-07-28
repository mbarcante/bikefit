import { Button, Card } from "react-bootstrap";

const BikeFitsCard = () => {
  return (
    <Card>
      <Card.Header>Bike Fits</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BikeFitsCard;
