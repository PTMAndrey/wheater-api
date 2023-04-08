import React from 'react'
import { useState } from 'react';
import useStateProvider from '../../hooks/useStateProvider';
import useWindowDimensions from '../../hooks/useWindowDimmensions';
import { P } from '../../styles/HomeStyles';
import { Romania } from '../services/romania.js';

const Map = () => {

    const { selectedCity, setSelectedCity } = useStateProvider();
    const {width} = useWindowDimensions();

    const handleCityClick = (event) => {
        if (event.target.tagName === 'path') {
            // Retrieve the 'title' attribute using getAttribute
            setSelectedCity(event.target.getAttribute('title'));
            // setQuery({ q: event.target.getAttribute('title') })
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
        <div >
            <Romania onClick={handleCityClick} handleCityHover={handleCityHover} handleCityLeave={handleCityLeave} selectedCity={selectedCity} />
            {selectedCity && <P>Selected city: {selectedCity}</P>}

        </div>
    )
}

export default Map