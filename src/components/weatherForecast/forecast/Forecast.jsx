import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { iconUrlFromCode } from "../../../components/services/weatherService";
import { Button, CardForecast, Div,  H5, H6 } from "../../../styles/HomeStyles";
import useStateProvider from "../../../hooks/useStateProvider";
import styles from './Forecast.module.scss';

const Forecast = ({ items }) => {
    const { units, setUnits } = useStateProvider();
    const [numToShow, setNumToShow] = useState(6);

    const handleShowMore = () => {
        setNumToShow(numToShow + 6);
    };
    const itemsToDisplay = items.slice(0, numToShow);

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };
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
                            <Div className={styles.changeUnits}>
                            <H6 className="card-text pt-2">{`${item.temp.toFixed()}°`}</H6>
                                <button
                                    name="metric"
                                    onClick={handleUnitsChange}
                                >
                                    °C
                                </button>
                                <button
                                    name="imperial"
                                    onClick={handleUnitsChange}
                                >
                                    °F
                                </button>
                            </Div>

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