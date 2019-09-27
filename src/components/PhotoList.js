import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard.js";
import axios from "axios";
import { Container, Row } from "reactstrap";
import moment from "moment";

export default function PhotoList() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
    const [count, setCount] = useState(1);


    function randomDate () {
      let randomYear= (Math.floor(Math.random()*20)+2000).toString()
      let randomMonth =(Math.floor(Math.random()*12)+1).toString()
      let randomDay =(Math.floor(Math.random()*31)+1).toString()
      setDate(`${randomYear}-${randomMonth}-${randomDay}`);
    }

   

    function handleButtonReverse () {
      setDate(moment().subtract(count, 'days').format('YYYY-MM-DD'));
      setCount(count + 1);
      console.log(count);
      console.log(date)
    }


  useEffect(() => {
    
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=Orl9wKUbysbOnh3c6TFa0R5fRfy7CAKNsrFTR569&date=${date}`)
      .then(result => {
          setData(result.data)
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, [date]);

  return ( 

    <Container>
      <Row>  
        <PhotoCard 
          title={data.title}
          explanation={data.explanation}
          image={data.hdurl}
          date={data.date}
          randomDate={randomDate}
          handleButtonReverse={handleButtonReverse}
        />
      </Row>
    </Container>
  )
}