import React from "react";
import { Card, CardBody, CardText, Row, Col, CardHeader, ListGroup, ListGroupItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Assuming you have custom styles in this file

export default function AllRequests() {
  return (
    <div className="">
      {/* First Card */}
      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col xs="11"  sm="8" md="6" lg="4">
          <Card
            style={{
              width: '100%', // Ensures the card fills the column space
              border: '2px solid blue', // Blue border for the card
              borderRadius: '10px',
              
            }}
          >
            <CardHeader className="text-center">
              Request
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem><h4>Object</h4>RPO</ListGroupItem>
              <ListGroupItem><h4>Name</h4> mohamed</ListGroupItem>
              <ListGroupItem><h4>pénome</h4> bouraoui</ListGroupItem>
              <ListGroupItem><h4>Email</h4> mohamed@gmailcom</ListGroupItem>
              <ListGroupItem><h4>Télephone</h4> 92023029</ListGroupItem>
              <ListGroupItem><h4>EntrePrise</h4> tesla</ListGroupItem>
              <ListGroupItem><h4>Message</h4> corrge le bug</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Second Card */}
      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col xs="11" sm="8" md="6" lg="4">
          <Card
            style={{
              width: '100%', // Ensures the card fills the column space
              border: '2px solid blue', // Blue border for the card
              borderRadius: '10px', // Rounded corners for the card
            }}
          >
            <CardHeader className="text-center">
              Request
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem><h4>Object</h4>RPO</ListGroupItem>
              <ListGroupItem><h4>Name</h4> mohamed</ListGroupItem>
              <ListGroupItem><h4>pénome</h4> bouraoui</ListGroupItem>
              <ListGroupItem><h4>Email</h4> mohamed@gmailcom</ListGroupItem>
              <ListGroupItem><h4>Télephone</h4> 92023029</ListGroupItem>
              <ListGroupItem><h4>EntrePrise</h4> tesla</ListGroupItem>
              <ListGroupItem><h4>Message</h4> corrge le bug</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
