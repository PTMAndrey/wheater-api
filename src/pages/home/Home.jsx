import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { GlobalContext } from "../../context/GlobalContext";
import {
    P,
    MainNav,
    Sup,
} from "../../styles/HomeStyles";
import { Col } from "react-bootstrap";
import Map from "../../components/map/Map";
import useStateProvider from "../../hooks/useStateProvider";
import getFormattedWeatherData from "../../components/services/weatherService";
import TodayForecast from "../../components/weatherForecast/today/TodayForecast";
import Forecast from "../../components/weatherForecast/forecast/Forecast";

const Home = () => {

    const { theme } = useContext(GlobalContext);
    const { selectedCity, setSelectedCity } = useStateProvider();

    const [mainOptionNavigation, setMainOptionNavigation] = useState("map");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const [query, setQuery] = useState({ q: "București" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then((data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units]);
    console.log(weather);
    return (
        <Container>
            <MainNav>
                <Col className="d-flex justify-content-center"><button onClick={() => { setMainOptionNavigation("today") }}>TODAY</button></Col>
                <Col className="d-flex justify-content-center"><button onClick={() => { setMainOptionNavigation("24H") }}>NEXT 24 HOURS</button></Col>
                <Col className="d-flex justify-content-center"><button onClick={() => { setMainOptionNavigation("7D") }}>NEXT 7 DAYS</button></Col>
                <Col className="d-flex justify-content-center"><button onClick={() => { setMainOptionNavigation("map") }}>PICK CITY</button></Col>
            </MainNav>

            <Container>
                <Col>
                    {mainOptionNavigation === 'map' &&
                        <Map setMainOptionNavigation={setMainOptionNavigation} setQuery={setQuery} />
                    }
                    {mainOptionNavigation === 'today' &&
                        <>
                            {selectedCity && <P>Your selected city is: <b>{selectedCity}</b><Sup onClick={() => { setMainOptionNavigation("map") }}>Change city</Sup></P>}
                            <TodayForecast weather={weather} />
                        </>
                    }
                    {mainOptionNavigation === '24H' &&
                        <>
                            {selectedCity && <P>Your selected city is: <b>{selectedCity}</b><Sup onClick={() => { setMainOptionNavigation("map") }}>Change city</Sup></P>}


                            <Forecast title="hourly forecast" items={weather.hourly} />
                        </>
                    }
                    {mainOptionNavigation === '7D' &&
                        <>
                            {selectedCity && <P>Your selected city is: <b>{selectedCity}</b><Sup onClick={() => { setMainOptionNavigation("map") }}>Change city</Sup></P>}


                            <Forecast title="daily forecast" items={weather.daily} />
                        </>
                    }

                </Col>
            </Container>

        </Container>
    );
};

export default Home;