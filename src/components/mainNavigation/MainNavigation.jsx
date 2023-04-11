import React from 'react'
import { Col } from 'react-bootstrap';
import styles from './MainNavigation.module.scss';
import { MainNav } from '../../styles/HomeStyles';


const MainNavigation = ({mainOptionNavigation, setMainOptionNavigation}) => {
    return (
        <MainNav className={styles.mainNav}>
            <Col className={`${styles.butonNav} ${mainOptionNavigation === 'today' && styles.butonNavActive} `}><button onClick={() => { setMainOptionNavigation("today") }}>TODAY</button></Col>
            <Col className={`${styles.butonNav} ${mainOptionNavigation === '24H' && styles.butonNavActive} `}><button onClick={() => { setMainOptionNavigation("24H") }}>NEXT 24 HOURS</button></Col>
            <Col className={`${styles.butonNav} ${mainOptionNavigation === '7D' && styles.butonNavActive} `}><button onClick={() => { setMainOptionNavigation("7D") }}>NEXT 7 DAYS</button></Col>
            <Col className={`${styles.butonNav} ${mainOptionNavigation === 'map' && styles.butonNavActive} `}><button onClick={() => { setMainOptionNavigation("map") }}>PICK CITY</button></Col>
        </MainNav>
    )
}

export default MainNavigation