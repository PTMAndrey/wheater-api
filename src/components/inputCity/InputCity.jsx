import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import useStateProvider from "../../hooks/useStateProvider";

const InputCity = ({ setQuery, units, setUnits }) => {
    const [city, setCity] = useState("");
    const { setAlert } = useStateProvider();

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            setAlert({ type: 'warning', message: 'Analyzing...' });
            setTimeout(() => {
                setAlert({ type: 'danger', message: '#@! Hacking NASA with HTML!@#' });
            }, 3000);
            navigator.geolocation.getCurrentPosition((position) => {
                setTimeout(() => {
                    setAlert({ type: 'success', message: 'We found you!' });
                }, 6200);
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Search for city...."
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                />
                <UilSearch
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocationClick}
                />
            </div>

        </div>
    );
}

export default InputCity;
