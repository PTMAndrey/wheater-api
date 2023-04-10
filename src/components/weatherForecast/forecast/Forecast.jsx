import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { iconUrlFromCode } from "../../../components/services/weatherService";
import { Button, CardForecast, H4, H5, H6 } from "../../../styles/HomeStyles";

function Forecast({ items }) {
    const [numToShow, setNumToShow] = useState(6);

    const handleShowMore = () => {
        setNumToShow(numToShow + 6);
    };
    const itemsToDisplay = items.slice(0, numToShow);
    return (
        <div>
            <hr className="my-2" />
            <Row>
                {itemsToDisplay.map((item, index) => (

                    <CardForecast key={index} className="m-4">
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="card-img-top"
                            alt=""
                        />
                        <div className="card-body">
                            <H5 className="card-text pt-2">{item?.title}</H5>
                            <H6 className="card-text">{`${item.temp.toFixed()}°`}</H6>

                        </div>
                    </CardForecast>
                ))}
            {numToShow < items.length && (
                <Row className="d-flex align-items-center"><Button onClick={handleShowMore}>Show More</Button></Row>
            )} 
            
            </Row>

        </div>
    );
}

export default Forecast;