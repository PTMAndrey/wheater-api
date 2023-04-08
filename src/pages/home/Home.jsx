import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { GlobalContext } from "../../context/GlobalContext";
import {
    H1, H2, H3, H4, H5, H6,
    P,
    Button,
    MainNav,
} from "../../styles/HomeStyles";
import { Col, Row } from "react-bootstrap";
import Map from "../../components/map/Map";

const Home = () => {

    const { theme, themeSwitchHandler } = useContext(GlobalContext);

    const [mainOptionNavigation, setMainOptionNavigation] = useState("map");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Container>
            <MainNav>
                <button onClick={() => { setMainOptionNavigation("today") }}>TODAY</button>
                <button onClick={() => { setMainOptionNavigation("24H") }}>NEXT 24 HOURS</button>
                <button onClick={() => { setMainOptionNavigation("7D") }}>7 DAYS</button>
                <button onClick={() => { setMainOptionNavigation("map") }}>CHANGE CITY</button>

            </MainNav>

            <Container>
                <Col>
                    {mainOptionNavigation === 'map' &&
                        <Map/>
                    }
                    {mainOptionNavigation === 'today' &&
                        <P>Today</P>
                    }
                    {mainOptionNavigation === '24H' &&
                        <P>24H</P>
                    }
                    {mainOptionNavigation === '7D' &&
                        <P>7D</P>
                    }

                </Col>
            </Container>

        </Container>
    );
};

export default Home;