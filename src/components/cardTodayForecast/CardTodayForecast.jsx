import React, { useEffect, useState } from 'react';
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

const CardTodayForecast = () => {

    const { selectedCity, idSelectedCity, setAlert, favorites, setFavorites, weather, units, setUnits } = useStateProvider();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorites = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            setFavorites(fav => ({ ...fav, [idSelectedCity]: selectedCity }));
            setAlert({ type: 'success', message: selectedCity + ' is added to favorites' });
        }
        else {
            const newDictionary = Object.fromEntries(
                Object.entries(favorites).filter(([key]) => key !== idSelectedCity)
            );
            setFavorites(newDictionary);
            setAlert({ type: 'danger', message: selectedCity + ' was removed from favorites cities' });
        }
    }
    useEffect(() => {
        favorites && Object.entries(favorites).map(([key, value]) => (
            idSelectedCity === key && setIsFavorite(true)
        ))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idSelectedCity])


    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    return (
        <>
            <CardStyled className={`${styles.cardToday} m-4`}>

                <Div className={styles.favIconContainer}>
                    <div>
                        <TimeAndLocation weather={weather} />
                    </div>
                    <Div>
                        <UilFavorite className={isFavorite ? styles.favorite : styles.notFavorite} onClick={() => handleFavorites()} />
                    </Div>
                </Div>
                <hr />
                <div className={styles.cardTodayBody}>
                    <Col className='mt-3'>
                        <Div>
                            <div>Current weather</div>
                            <div className='d-flex flex-direction-row align-items-center'>
                                <img src={iconUrlFromCode(weather?.icon)} alt="" />
                                <H3>{`${weather?.temp.toFixed()}° ${units === 'metric' ? 'C' : 'F'}`}</H3>
                            </div>
                            <Div className='d-flex flex-direction-col mt-3 mb-3'>
                                <div>Change units</div>
                                <div className={styles.changeUnits}>
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
                                </div>
                            </Div>
                        </Div>
                    </Col>

                    <Col className={`${styles.todayForecast} mt-3`}>

                        <Row className={styles.forecastDetails}>
                            <UilTemperature />
                            <UilTear />
                            <UilWind />
                            <UilSun />
                            <UilSunset />
                        </Row>

                        <Row className={styles.forecastDetails}>
                            <p>Real feel</p>
                            <p>Humidity</p>
                            <p>Wind</p>
                            <p>High T°</p>
                            <p>Low T°</p>
                        </Row>

                        <Row className={styles.forecastDetails}>
                            <span>{`${weather?.feels_like.toFixed()}°`}</span>
                            <span>{`${weather?.humidity.toFixed()}%`}</span>
                            <span>{`${weather?.speed.toFixed()} km/h`}</span>
                            <span>{`${weather?.temp_max.toFixed()}°`}</span>
                            <span>{`${weather?.temp_min.toFixed()}°`}</span>
                        </Row>
                    </Col>
                </div>
            </CardStyled >
        </>
    );
};

export default CardTodayForecast;