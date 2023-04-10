import React, { useState } from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilFavorite,
} from "@iconscout/react-unicons";
import { CardStyled, Div, H3 } from '../../styles/HomeStyles';
import TimeAndLocation from '../weatherForecast/TimeAndLocation';
import styles from './CardTodayForecast.module.scss';
import { iconUrlFromCode } from "../services/weatherService";
import useStateProvider from '../../hooks/useStateProvider';
import { Col, Row } from 'react-bootstrap';

const CardTodayForecast = ({ weather, units, setUnits }) => {
    
    const { setAlert } = useStateProvider();
    const [favorite, setFavorite] = useState(false);

    const handleFavorites = () => {
        setFavorite(!favorite);
        if (!favorite)
            setAlert({ type: 'success', message: 'The city is added to Favorites' });
        else
            setAlert({ type: 'danger', message: 'The city was removed from Favorites' });
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    return (
        <>
            <CardStyled className={`${styles.cardToday} m-4`}>

                <Div className={styles.favContainer}>
                    <div>
                        <TimeAndLocation weather={weather} />
                    </div>
                    <Div>
                        <UilFavorite className={favorite ? styles.favorite : styles.notFavorite} onClick={() => handleFavorites()} />
                    </Div>
                </Div>
                <hr />
                <div className={styles.cardTodayBody}>
                    <Col className='mt-3'>
                        <Div>
                            <div>
                                Current weather
                            </div>
                            <div className='d-flex flex-direction-row align-items-center'>
                                <img src={iconUrlFromCode(weather.icon)} alt="" />
                                <H3>{`${weather.temp.toFixed()}°`}</H3>
                            </div>
                        </Div>
                    </Col>

                    <Col className={`${styles.todayForecast} mt-3`}>

                        <Col className={styles.forecastDetails}>
                            <UilTemperature size={18} />
                            Real feel
                            <span>{`${weather.feels_like.toFixed()}°`}</span>
                        </Col>

                        <Col className={styles.forecastDetails}>
                            <UilTear size={18} />
                            Humidity
                            <span>{`${weather.humidity.toFixed()}%`}</span>
                        </Col>

                        <Col className={styles.forecastDetails}>
                            <UilWind size={18} />
                            Wind
                            <span>{`${weather.speed.toFixed()} km/h`}</span>
                        </Col>

                        <Col className={styles.forecastDetails}>
                            <UilSun />
                            High T°
                            <span>{`${weather.temp_max.toFixed()}°`}</span>

                        </Col>

                        <Col className={styles.forecastDetails}>
                            <UilSunset />
                            Low T°
                            <span>{`${weather.temp_min.toFixed()}°`}</span>
                        </Col>
                    </Col>
                </div>
            </CardStyled>
        </>
    );
};

export default CardTodayForecast;