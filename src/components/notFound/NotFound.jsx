import React from 'react'
import imagineNotFound from '../../assets/images/notfound.png'
import {BiHomeAlt} from 'react-icons/bi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './NotFound.module.scss';
import {P} from "../../styles/HomeStyles";
const NotFound = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <img src={imagineNotFound} alt='Pagina nu a fost gasita' className={styles.imagineNotFound} />
                </Col>
                <Col className='mt-5'>
                    <Row><P className={styles.ntf}>#404</P></Row>
                    <Row className='mt-5'><P className={styles.ntf2}>Aha! Vezi? Și tu poți greși!</P></Row>
                    <Row><P className={styles.ntf3}>( sau am greșit noi )...</P></Row>
                    <Row><P className={styles.ntf2}>... indiferent care e situația, probabil ar trebui</P></Row>
                    <Row><P className={styles.ntf2}><a href='/'>să mergi la pagina principală <BiHomeAlt/></a></P></Row>
                </Col>
            </Row>
        </Container>
    )
}
export default NotFound;