import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import useStateProvider from "../../hooks/useStateProvider";
import { Div, H5, P } from "../../styles/HomeStyles";
import styles from './InputCity.module.scss';

const InputCity = (props) => {
    const [city, setCity] = useState("");
    const { setAlert, setQuery, setSelectedCity, setFindMyLocation } = useStateProvider();

    const handleSearchClick = () => {
        if (city !== "") {
            let _city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

            setQuery({ q: _city });
            setSelectedCity(_city);
            setFindMyLocation(false);
            props.setMainOptionNavigation(props.prevOptionNav !== null ? props.prevOptionNav : 'today');
        }
        else{
            setAlert({ type: 'warning', message: 'Field must not be empty!' });
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            setAlert({ type: 'warning', message: 'Analyzing...' });
            navigator.geolocation.getCurrentPosition((position) => {
                setTimeout(() => {
                    setAlert({ type: 'success', message: 'We found you! ^.^' });
                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    setQuery({
                        lat,
                        lon,
                    });
                    setFindMyLocation(true);
                    props.setMainOptionNavigation(props.prevOptionNav !== null ? props.prevOptionNav : 'today');
                }, 3000);
            });
        }
    };

    return (
        <Div className={styles.search}>
            <Div className={styles.searchIcons}>
                <input
                    className={styles.input}
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Search for city...."
                />
                <UilSearch
                    size={25}
                    className={styles.sIcon}
                    onClick={handleSearchClick}
                />
            </Div>
            <Div className="mt-3 mb-3">
                <H5>OR</H5>
            </Div>
            <Div className={styles.currentLocation}
                onClick={handleLocationClick}>
                <UilLocationPoint
                    size={25}
                />
                <P>Get current location</P>
            </Div>

        </Div>
    );
}

export default InputCity;
