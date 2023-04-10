import React from "react";
import { Div } from "../../../styles/HomeStyles";
import CardTodayForecast from "../../cardTodayForecast/CardTodayForecast";
import { Row } from "react-bootstrap";

function TodayForecast({ weather, units, setUnits }) {
  return (
    <Div>
      <hr className="my-2" />
      <Row className="d-flex justify-items-center">
        <CardTodayForecast weather={weather} units={units} setUnits={setUnits} className="m-4"/>
      </Row>
    </Div>
  );
}

export default TodayForecast;