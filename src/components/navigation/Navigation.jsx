import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/images/Logo.svg';
import { GlobalContext } from '../../context/GlobalContext';
import styles from './Navigation.module.scss';
import { NavBarStyledColorText, NavBarStyledBackground } from '../../styles/HomeStyles';
import useWindowDimensions from '../../hooks/useWindowDimmensions';
import useStateProvider from '../../hooks/useStateProvider';

const Navigation = (props) => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);
  const { width } = useWindowDimensions();
  const { customTheme } = useStateProvider();

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Navbar key={props.expand} sticky="top" expand={props.expand}>
      <NavBarStyledBackground>
        <Container fluid className='d-flex align-items-center justify-content-between'>
         <Navbar.Brand href="/" ><NavBarStyledColorText> <img src={Logo} className={styles.logoNavbar} alt="WEATHER - ACCESA" />{width > 300 && 'Weather Accesa'}</NavBarStyledColorText></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${props.expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${props.expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${props.expand}`}
            placement="start"
          >
            <NavBarStyledBackground>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${props.expand}`}>
                  <Nav.Link href="/" > <NavBarStyledColorText> <img src={Logo} className={styles.logoNavbar} alt="WEATHER - ACCESA" />{width > 264 && 'Weather Accesa'}</NavBarStyledColorText></Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className={`justify-content-end flex-grow-1 pe-3 d-flex align-items-center`}>
                  <NavDropdown
                    title={<NavBarStyledColorText>Themes</NavBarStyledColorText>}
                    className={`${styles.onHover} `}
                    id={`offcanvasNavbarDropdown-expand-${props.expand}`}
                  >
                    <NavDropdown.Item className={`{${styles.hello} ${theme === "dark" ? 'text-info' : 'text-muted'} }`} onClick={() => { themeSwitchHandler(theme !== "dark" && "dark") }}>
                      Dark
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className={`{${styles.hello} ${theme === "light" ? 'text-info' : 'text-muted'} }`} onClick={() => { themeSwitchHandler(theme !== "light" && "light") }}>
                      Light
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className={`{${styles.hello} ${theme === "fluffy" ? 'text-info' : 'text-muted'} }`} onClick={() => { themeSwitchHandler(theme !== "fluffy" && "fluffy") }}>
                      Fluffy
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className={`{${styles.hello} ${theme === "rain" ? 'text-info' : 'text-muted'} }`} onClick={() => { themeSwitchHandler(theme !== "rain" && "rain") }} >
                      Rain
                    </NavDropdown.Item>
                    {Object.keys(customTheme).length !== 0 && <>
                      <NavDropdown.Divider />

                      <NavDropdown.Item className={`{${styles.hello} ${theme === "custom" ? 'text-info' : 'text-muted'} }`} onClick={() => { themeSwitchHandler(theme !== "custom" && "custom") }} >
                        {customTheme?.name}
                      </NavDropdown.Item>
                    </>}
                    <NavDropdown.Divider />
                    <NavDropdown.Item className={`{${styles.hello} 'text-info' `} href='/custom-theme' >
                      Custom
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link className={`${styles.onHover}`} href="/" ><NavBarStyledColorText>Home</NavBarStyledColorText></Nav.Link>
                  <Nav.Link className={`${styles.onHover}`} href="/favorites" ><NavBarStyledColorText>Favorites</NavBarStyledColorText></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </NavBarStyledBackground>
          </Navbar.Offcanvas>
        </Container>
      </NavBarStyledBackground>
    </Navbar>
  );
};

export default Navigation;