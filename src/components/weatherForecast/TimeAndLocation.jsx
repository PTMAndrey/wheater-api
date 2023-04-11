import React from "react";
import { formatToLocalTime } from "../../components/services/weatherService";
import { Div, H5 } from "../../styles/HomeStyles";

const TimeAndLocation = ({ weather }) => {
    return (
        <Div>
            <Div>
                <H5>{weather?.name}, {weather?.country}</H5>
            </Div>
            <Div>
                {formatToLocalTime(weather?.dt, weather?.timezone)}
            </Div>

        </Div>
    );
}

export default TimeAndLocation;