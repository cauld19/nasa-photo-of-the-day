import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button 
} from 'reactstrap';

export default function PhotoCard(props) {
  return (
      <Col>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg src={props.image} alt="Space" />
          <CardBody>
            <Button style ={{margin: '10px' }} onClick={() => {props.randomDate()}}>Random</Button>
            <Button onClick={() => {props.handleButtonReverse()}}>Reverse</Button>
            <CardTitle> <h1>{props.title}</h1> </CardTitle>
            <CardSubtitle> <h3>{props.date}</h3></CardSubtitle>
            <CardText className="text-info">{props.explanation}</CardText>
          </CardBody>
      </Card>
      </Col>
  );
}