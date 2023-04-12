import React from 'react'
import useStateProvider from '../../hooks/useStateProvider';
import { H5} from '../../styles/HomeStyles';
import { Romania } from '../services/romania.js';
import styles from "./Map.module.scss"

const Map = (props) => {

    const { selectedCity, setSelectedCity, setIDSelectedCity, setQuery } = useStateProvider();

    const handleCityClick = (event) => {
        if (event.target.tagName === 'path') {
            setSelectedCity(event.target.getAttribute('title'));
            setIDSelectedCity(event.target.getAttribute('id'))
            props.setMainOptionNavigation(props.prevOptionNav !== null ? props.prevOptionNav : 'today');
            setQuery({ q: event.target.getAttribute('title') })
        }
    }

    const handleCityHover = (event) => {
        const city = event.target.getAttribute('title');
        const cityNameHover = document.querySelector('.cityNameHover');

        cityNameHover.style.display = 'block';
        if (city === 'Cluj' || city === 'Bihor')
            cityNameHover.textContent = city + " - Accesa's Office";
        else if (city === "Bucuresti")
            cityNameHover.textContent = city + " - Capitala Romaniei";
        else
            cityNameHover.textContent = city;

        cityNameHover.style.left = `${event.pageX}px`;
        cityNameHover.style.top = `${event.pageY}px`;
    }

    const handleCityLeave = () => {
        const cityNameHover = document.querySelector('.cityNameHover');
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