import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard.js";
import axios from "axios";
import { Container, Row } from "reactstrap";

export default function PhotoList() {
    const [data, setData] = useState([]);

  useEffect(() => {
    
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=Orl9wKUbysbOnh3c6TFa0R5fRfy7CAKNsrFTR569")
      .then(result => {
          setData(result.data)
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return ( 

    <Container>
      <Row>  
        <PhotoCard 
          title={data.title}
          explanation={data.explanation}
          image={data.hdurl}
          date={data.date}
        />
      </Row>
    </Container>
  )
}