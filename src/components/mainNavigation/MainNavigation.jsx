import React from 'react'
import { Col } from 'react-bootstrap';
import styles from './MainNavigation.module.scss';
import { MainNav } from '../../styles/HomeStyles';


const MainNavigation = ({setMainOptionNavigation}) => {
    return (
        <MainNav className={styles.mainNav}>
            <Col className={styles.butonNav}><button onClick={() => { setMainOptionNavigation("today") }}>TODAY</button></Col>
            <Col className={styles.butonNav}><button onClick={() => { setMainOptionNavigation("24H") }}>NEXT 24 HOURS</button></Col>
            <Col className={styles.butonNav}><button onClick={() => { setMainOptionNavigation("7D") }}>NEXT 7 DAYS</button></Col>
            <Col className={styles.butonNav}><button onClick={() => { setMainOptionNavigation("map") }}>PICK CITY</button></Col>
        </MainNav>
    )
}

export default MainNavigation