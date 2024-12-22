import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css"; // Assuming you have custom styles in this file
import { structureData1 } from "../Constant/data";
import axios from "axios";
import Loading from "../Constant/Loading";

export default function AllRequests() {
  const [request, setRequest] = useState([]);
 

 

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://backandstedy-29.onrender.com/api/v1/Request"
        );
        console.log(response.data.formulair);
        // No need to use JSON.parse, axios handles it automatically
        setRequest(response.data.formulair); 
       
         
        
        // Assuming response.data is already an array of categories

        // Log the fetched data
      } catch (error: any) {
       
      
      } finally {
        // Set loading state to false after the request is complete
      }
    };

    fetchCategories(); // Call the async function
  }, []);
 
  
  return request.length === 0 ? (
    <Loading />
  ) : (
    <div className="request-container">
      <Row className="justify-content-center" style={{ marginTop: "20px" }}>
        {Object.values(request).map((el: any, index: number) => (
          <Col xs="11" sm="8" md="6" lg="4" key={index}>
            <Card
              style={{
                width: "100%", // La carte remplit toute la largeur disponible
                border: "2px solid blue", // Bordure bleue
                borderRadius: "10px", // Coins arrondis
                marginBottom: "20px", // Espacement entre les cartes
              }}
            >
              <CardHeader className="text-center">
                Request {index + 1}
              </CardHeader>
              <ListGroup flush>
                {Object.entries(el).map(
                  ([key, value]: [string, any], idx: number) => (
                    <ListGroupItem key={idx}>
                      <h4 style={{ fontSize: "16px", color: "#333" }}>{key}</h4>
                      <p style={{ margin: 0 }}>{value}</p>
                    </ListGroupItem>
                  )
                )}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
  
}
