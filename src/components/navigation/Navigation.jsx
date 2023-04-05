import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/images/Logo.svg';
import ChangeTheme from '../../assets/images/changeTheme.svg';
import { GlobalContext } from '../../context/GlobalContext';
import styles from './Navigation.module.scss';
import { NavBarStyled } from '../../styles/HomeStyles';
import useWindowDimensions from '../../hooks/useWindowDimmensions';

const Navigation = (props) => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Navbar key={props.expand} sticky="top" expand={props.expand}>
      <NavBarStyled>
        <Container fluid className='d-flex align-items-center justify-content-between'>
          <Navbar.Brand href="/" className={`${theme === "dark" && width>300 ? 'text-white' : 'text-black'}`}><img src={Logo} className={styles.logoNavbar} alt="WEATHER - ACCESA" />{width > 300 && 'Weather Accesa'}</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${props.expand}`}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${props.expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${props.expand}`}
            placement="start"
          >
            <NavBarStyled>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${props.expand}`}>
                <Nav.Link href="/" className={`${theme === "dark" && width>264 ? 'text-white' : 'text-black'}`}><img src={Logo} className={styles.logoNavbar} alt="WEATHER - ACCESA" />{width > 264 && 'Weather Accesa'}</Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className={`justify-content-end flex-grow-1 pe-3 d-flex align-items-center`}>
                <Nav.Link className={` ${theme === "dark" ? 'text-white' : 'text-black'} ${styles.onHover}`} href="/favorites" >Favorites</Nav.Link>
                <Nav.Link className={` ${theme === "dark" ? 'text-white' : 'text-black'} ${styles.onHover}`} href="/favorites" >Favorites</Nav.Link>
                <NavDropdown
                  title={<img src={ChangeTheme} style={{filter: `${theme === "dark" ? 'invert(1)': 'invert(0)'}`}} className={styles.changeTheme} alt="WEATHER - ACCESA" />}
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
                </NavDropdown>

              </Nav>
            </Offcanvas.Body></NavBarStyled>
          </Navbar.Offcanvas>
        </Container>
      </NavBarStyled>
    </Navbar>
  );
};

export default Navigation;