import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { GlobalContext } from "../../context/GlobalContext";
import {
    P,
    Sup,
} from "../../styles/HomeStyles";
import { Col } from "react-bootstrap";
import Map from "../../components/map/Map";
import useStateProvider from "../../hooks/useStateProvider";
import getFormattedWeatherData from "../../components/services/weatherService";
import TodayForecast from "../../components/weatherForecast/today/TodayForecast";
import Forecast from "../../components/weatherForecast/forecast/Forecast";
import MainNavigation from "../../components/mainNavigation/MainNavigation";

const Home = () => {
    const [prevOptionNav,setPrevOptionNav] = useState(null);
    const { theme } = useContext(GlobalContext);
    const { selectedCity, setSelectedCity,query, setQuery, units, setUnits, weather, setWeather, } = useStateProvider();

    const [mainOptionNavigation, setMainOptionNavigation] = useState("map");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);


    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then((data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units, prevOptionNav]);
    return (
        <Container>
             <MainNavigation mainOptionNavigation={mainOptionNavigation} setMainOptionNavigation={setMainOptionNavigation} />

            <Container>
                <Col>
                    {mainOptionNavigation === 'map' &&
                        <Map prevOptionNav={prevOptionNav} setMainOptionNavigation={setMainOptionNavigation} />
                    }
                    {mainOptionNavigation === 'today' &&
                        <>
                            {selectedCity && <P style={{minWidth:'170px'}}>Your selected city is: <b>{selectedCity}</b><Sup onClick={() => {setPrevOptionNav('today'); setMainOptionNavigation("map") }}>Change city</Sup></P>}
                            <TodayForecast/>
                        </>
                    }
                    {mainOptionNavigation === '24H' &&
                        <>
                            {selectedCity && <P style={{minWidth:'170px'}}>Your selected city is: <b>{selectedCity}</b><Sup onClick={() => { setPrevOptionNav('24H'); setMainOptionNavigation("map") }}>Change city</Sup></P>}


                            <Forecast items={weather.hourly} />
                        </>
                    }
                    {mainOptionNavigation === '7D' &&
                        <>
                            {selectedCity && <P style={{minWidth:'170px'}}>Your selected city is: <b>{selectedCity}</b><Sup onClick={() => {setPrevOptionNav('7D');  setMainOptionNavigation("map") }}>Change city</Sup></P>}


                            <Forecast items={weather.daily} />
                        </>
                    }

                </Col>
            </Container>

        </Container>
    );
};

export default Home;