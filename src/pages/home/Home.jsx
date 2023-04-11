import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { GlobalContext } from "../../context/GlobalContext";
import { H5, P, Sup } from "../../styles/HomeStyles";
import { Col } from "react-bootstrap";
import Map from "../../components/map/Map";
import useStateProvider from "../../hooks/useStateProvider";
import TodayForecast from "../../components/weatherForecast/today/TodayForecast";
import Forecast from "../../components/weatherForecast/forecast/Forecast";
import MainNavigation from "../../components/mainNavigation/MainNavigation";
import styles from './Home.module.scss';
import InputCity from "../../components/inputCity/InputCity";

const Home = () => {
    const [prevOptionNav, setPrevOptionNav] = useState(null);
    const { theme } = useContext(GlobalContext);
    const { selectedCity, weather, fromFavorites, setFromFavorites } = useStateProvider();

    const [mainOptionNavigation, setMainOptionNavigation] = useState("map");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        if (fromFavorites) { setMainOptionNavigation('today'); setFromFavorites(false); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fromFavorites])

    return (
        <Container className={styles.mainContainer}>
            <MainNavigation mainOptionNavigation={mainOptionNavigation} setMainOptionNavigation={setMainOptionNavigation} />

            <Container>
                <Col>
                    {mainOptionNavigation === 'map' && <>
                        <P className="d-flex justify-content-center">Your selected city is: <b>{weather?.name}</b></P>
                        <InputCity prevOptionNav={prevOptionNav} setMainOptionNavigation={setMainOptionNavigation} />
                        <H5 className="d-flex justify-content-center">OR</H5>
                        <Map prevOptionNav={prevOptionNav} setMainOptionNavigation={setMainOptionNavigation} />
                    </>
                    }
                    {mainOptionNavigation === 'today' &&
                        <>
                            {selectedCity && <P style={{ minWidth: '170px' }}>Your selected city is: <b>{weather?.name}</b><Sup onClick={() => { setPrevOptionNav('today'); setMainOptionNavigation("map") }}>Change city</Sup></P>}
                            <TodayForecast />
                        </>
                    }
                    {mainOptionNavigation === '24H' &&
                        <>
                            {selectedCity && <P style={{ minWidth: '170px' }}>Your selected city is: <b>{weather?.name}</b><Sup onClick={() => { setPrevOptionNav('24H'); setMainOptionNavigation("map") }}>Change city</Sup></P>}


                            <Forecast items={weather.hourly} />
                        </>
                    }
                    {mainOptionNavigation === '7D' &&
                        <>
                            {selectedCity && <P style={{ minWidth: '170px' }}>Your selected city is: <b>{weather?.name}</b><Sup onClick={() => { setPrevOptionNav('7D'); setMainOptionNavigation("map") }}>Change city</Sup></P>}


                            <Forecast items={weather.daily} />
                        </>
                    }

                </Col>
            </Container>

        </Container>
    );
};

export default Home;