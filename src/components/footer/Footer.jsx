import React, { useContext, useEffect } from 'react';
import { MDBFooter, MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { RiFacebookCircleLine } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import { FooterBG } from '../../styles/HomeStyles'
import { GlobalContext } from '../../context/GlobalContext';

import styles from './Footer.module.scss'
const Footer = () => {
    const { theme } = useContext(GlobalContext);

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <MDBFooter bgColor='transparent' color='light' className={`text-center text-lg-start text-white`}>
            <FooterBG>
                <section className='d-flex justify-content-center align-items-center justify-content-lg-between p-3 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <h4>Social media</h4>
                    </div>

                    <div className='d-flex justify-content-center '>
                        <MDBBtn color="transparent" floating className='m-1' href='https://www.facebook.com/accesa.eu' target='_blank' role='button'>
                            <RiFacebookCircleLine className={styles.iconFooter} />
                        </MDBBtn>

                        <MDBBtn color="transparent" floating className='m-1' href='https://www.instagram.com/lifeataccesa/' target='_blank' role='button'>
                            <RiInstagramLine className={styles.iconFooter} />
                        </MDBBtn>

                        <MDBBtn color="transparent" floating className='m-1' href='https://careers.accesa.eu/' target='_blank' role='button'>
                            <MdOutlineWorkOutline className={styles.iconFooter} />
                        </MDBBtn>

                        <MDBBtn color="transparent" floating className='m-1' href='https://accesa.eu/' target='_blank' role='button'>
                            <CgWebsite className={styles.iconFooter} />
                        </MDBBtn>

                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-4'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h5 className='text-uppercase fw-bold mb-4'>Contact</h5>
                                <p></p>
                                <a href="tel:0364 115 115">0364 115 115</a>
                            </MDBCol>

                            <MDBCol md="5" lg="7" xl="4" className='mx-auto mb-4'>
                                <h5 className='text-uppercase fw-bold mb-4'>Offices</h5>
                                <p className='text-uppercase'>♦ Accesa</p>
                                <p>Str. Constanța 12 Platinia, Cluj-Napoca 400158, Romania</p>
                                <p className='text-uppercase mt-5'>♦ Oradea</p>
                                <p>Cetatii Square 1, Oradea Plaza, 410520, Oradea, Romania</p>
                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </section>
            </FooterBG>
        </MDBFooter >
    );
}
export default Footer;