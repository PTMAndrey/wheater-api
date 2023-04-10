import React from "react";
import { formatToLocalTime } from "../../components/services/weatherService";
import useStateProvider from "../../hooks/useStateProvider";
import { Div, H5 } from "../../styles/HomeStyles";

const TimeAndLocation = ({ weather }) => {
    const { selectedCity } = useStateProvider();
    return (
        <Div>
            <Div>
                <H5>{selectedCity}, {weather?.country}</H5>
            </Div>
            <Div>
                {formatToLocalTime(weather?.dt, weather?.timezone)}
            </Div>

        </Div>
    );
}

export default TimeAndLocation;