import React from 'react'
import { Row } from 'react-bootstrap';
import useStateProvider from '../../hooks/useStateProvider';
import { H5, P } from '../../styles/HomeStyles';
import { Romania } from '../services/romania.js';
import styles from "./Map.module.scss"

const Map = (props) => {

    const { selectedCity, setSelectedCity, setIDSelectedCity, setQuery, weather } = useStateProvider();

    const handleCityClick = (event) => {
        if (event.target.tagName === 'path') {
            // Retrieve the 'title' attribute using getAttribute
            setSelectedCity(event.target.getAttribute('title'));
            setIDSelectedCity(event.target.getAttribute('id'))
            props.setMainOptionNavigation(props.prevOptionNav !== null ? props.prevOptionNav : 'today');
            setQuery({ q: event.target.getAttribute('title') })
        }
    }

    const handleCityHover = (event) => {
        const city = event.target.getAttribute('title');
        const pathBounds = event.target.getBoundingClientRect();
        const cityNameHover = document.querySelector('.cityNameHover');

        // update title content
        cityNameHover.style.display = 'block';
        if (city === 'Cluj' || city === 'Bihor')
            cityNameHover.textContent = city + " - Accesa's Office";
        else if (city === "Bucuresti")
            cityNameHover.textContent = city + " - Capitala Romaniei";
        else
            cityNameHover.textContent = city;

        // position title above path
        cityNameHover.style.top = `${pathBounds.top - cityNameHover.offsetHeight}px`;
        cityNameHover.style.left = `${pathBounds.left + pathBounds.width / 2 - cityNameHover.offsetWidth / 2}px`;

        // cityNameHover.style.left = `${event.pageX}px`;
        // cityNameHover.style.top = `${event.pageY}px`;
    }

    const handleCityLeave = () => {
        const cityNameHover = document.querySelector('.cityNameHover');

        // clear title content and position
        cityNameHover.textContent = '';
        cityNameHover.style.top = '';
        cityNameHover.style.left = '';
        cityNameHover.style.display = 'none';
    }
    return (
        <div className={styles.map}>
            <div className={styles.pickCity}>
                <H5>Pick any city to view the weather!</H5>
                <Romania onClick={handleCityClick} handleCityHover={handleCityHover} handleCityLeave={handleCityLeave} selectedCity={selectedCity} />
            </div>
        </div>
    )
}

export default Map