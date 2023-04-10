import React, { useEffect, useState } from 'react'
import useStateProvider from '../../hooks/useStateProvider'
import { UilFavorite, UilSad, UilHome } from "@iconscout/react-unicons";
import { CardStyled, Div, H1, H3, H4, H5, H6, P } from '../../styles/HomeStyles';
import styles from '../../components/cardTodayForecast/CardTodayForecast.module.scss';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimmensions';

const Favorites = () => {
    const { width } = useWindowDimensions();
    const navigate = useNavigate();
    const { setAlert, fetchWeather, favorites, setFavorites, setIDSelectedCity, setSelectedCity, setQuery, setFromFavorites } = useStateProvider();

    const handleFavorites = (_key, _value) => {
        const newDictionary = Object.fromEntries(
            Object.entries(favorites).filter(([key]) => key !== _key)
        );
        setFavorites(newDictionary);
        setAlert({ type: 'danger', message: _value + ' was removed from favorite cities' });
    }

    const handleViewFavorite = (key, value) => {
        setIDSelectedCity(key);
        setSelectedCity(value);
        setQuery({ q: value });
        setFromFavorites(true);
        fetchWeather();
        navigate('/');
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }

    return (
        <div className={styles.favoritePage}>
            {Object.keys(favorites).length !== 0 && <H4>Your favorite cities are:</H4>}

            {Object.keys(favorites).length !== 0 && Object.entries(favorites).map(([key, value]) => (
                <CardStyled className={`${styles.cardFavorites}`} key={key} onClick={(e) => { stopPropagation(e); handleViewFavorite(key, value) }}>
                    <Div className={styles.favContainer}>
                        <H3>{value}</H3>
                        <Div >
                            <UilFavorite className={styles.favorite} onClick={(e) => { stopPropagation(e); handleFavorites(key, value) }} />
                        </Div>
                    </Div>
                </CardStyled>
            ))

            }

            {Object.keys(favorites).length === 0 &&
                <Div className={`${styles.cardToday} m-4`}>
                    <H4>You don't have cities saved as favorites <UilSad /> </H4>
                    <H4>
                        Select now one and save it as a favorite to check it later!
                    </H4>
                    <Div onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
                        <UilHome /> Visit the home page
                    </Div>
                </Div>
            }

        </div>
    )
}

export default Favorites;