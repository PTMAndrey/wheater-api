import React from "react";
import { Div } from "../../../styles/HomeStyles";
import CardTodayForecast from "../../cardTodayForecast/CardTodayForecast";
import { Row } from "react-bootstrap";

const TodayForecast=()=>{
  return (
    <Div>
      <hr className="my-2" />
      <Row className="d-flex justify-items-center mr-5">
        <CardTodayForecast className="m-4"/>
      </Row>
    </Div>
  );
}

export default TodayForecast;