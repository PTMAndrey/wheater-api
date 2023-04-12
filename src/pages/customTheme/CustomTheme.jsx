import React, { useContext, useState } from 'react'

import Logo from '../../assets/images/Logo.svg';
import styles from './CustomTheme.module.scss';
import { Button, Div, H3 } from '../../styles/HomeStyles';
import { Col } from 'react-bootstrap';
import useStateProvider from '../../hooks/useStateProvider';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const CustomTheme = () => {
    const { setAlert, units, customTheme, setCustomTheme } = useStateProvider();

    const { themeSwitchHandler } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [newTheme, setTheme] = useState({
        name: Object.keys(customTheme).length !== 0 ? customTheme.name : 'MyTheme',
        colors: {
            background: Object.keys(customTheme).length !== 0 ? customTheme.colors.background : "#f0f7f6",
            footer: Object.keys(customTheme).length !== 0 ? customTheme.colors.footer : "#caccac",
            navBar: Object.keys(customTheme).length !== 0 ? customTheme.colors.navBar : "#c9001e",
            navBarColor: Object.keys(customTheme).length !== 0 ? customTheme.colors.navBarColor : "#ffffff",
            text: Object.keys(customTheme).length !== 0 ? customTheme.colors.text : "#2d334a",
            button: Object.keys(customTheme).length !== 0 ? customTheme.colors.button : "#d8b800",
            buttonHover: Object.keys(customTheme).length !== 0 ? customTheme.colors.buttonHover : "#8dc0c0",
            cardBG: Object.keys(customTheme).length !== 0 ? customTheme.colors.cardBG : "#a08d85",
            colorCard: Object.keys(customTheme).length !== 0 ? customTheme.colors.colorCard : "#000000",
        },
    });

    const handleColorChange = (event) => {
        const { name, value } = event.target;
        setTheme(prevTheme => ({
            ...prevTheme,
            colors: {
                ...prevTheme.colors,
                [name]: value
            }
        }));
    }
    const handleNameChange = (event) => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setTheme(prevTheme => ({
            ...prevTheme,
            name: result
        }));
    };


    const [buttonHover, setButtonHover] = useState(false);

    const handleMouseEnter = () => {
        setButtonHover(true);
    };

    const handleMouseLeave = () => {
        setButtonHover(false);
    };


    const handleSaveTheme = () => {
        const updatedCustomTheme = { ...newTheme };
        setCustomTheme(updatedCustomTheme);
        setAlert({ type: 'success', message: 'Your theme was saved' });
    }

    const handleRemoveTheme = () => {
        setCustomTheme({});
        themeSwitchHandler("light");
        setAlert({ type: 'success', message: 'Your theme was deleted' });
        navigate('/');
    }

    return (
        <Div className={styles.customThemeContainer}>
            <H3 className='d-flex justify-items-center align-items-center'>Customize your own theme on website</H3>
            <div className={styles.customThemeBody}>
                <div className={styles.miniWebPage}>
                    <div
                        className={styles.miniNavBar}
                        style={{
                            backgroundColor: newTheme.colors.navBar,
                            color: newTheme.colors.navBarColor,
                        }}
                    >
                        <div>
                            <img src={Logo} className={styles.logoNavbar} alt="WEATHER - ACCESA" />
                            <span className={styles.titleApp} >Weather Accesa</span>
                        </div>
                        <div className='d-flex'>
                            <span>Themes</span>
                            <span style={{ marginLeft: '10px' }}>Home</span>
                            <span style={{ marginLeft: '10px', marginRight: '10px' }}>Favorites</span>
                        </div>
                    </div>

                    <div
                        className={styles.miniBody}
                        style={{
                            backgroundColor: newTheme.colors.background,
                        }}
                    >
                        <Col>
                            {/* <h1 style={{ color: newTheme.colors.text, marginTop: '0px' }}>This is a text</h1> */}
                            <p style={{ color: newTheme.colors.text }}>This is a text</p>
                            <button style={{ backgroundColor: buttonHover ? newTheme.colors.buttonHover : newTheme.colors.button, padding: '6px', color: 'white', border: '2px solid', borderColor: buttonHover ? newTheme.colors.button : newTheme.colors.buttonHover }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >This is a button</button>

                            <div className={styles.miniCard} style={{ backgroundColor: newTheme.colors.cardBG }}>
                                <h6 style={{ color: newTheme.colors.colorCard }}>City name</h6>
                                <hr className='my-2' />
                                <div className={styles.miniForecast}>
                                    <span style={{ color: newTheme.colors.colorCard }}>Temperature | ° {`${units === 'metric' ? 'C' : 'F'}`}</span>
                                    <span style={{ color: newTheme.colors.colorCard }}>Other details</span>
                                </div>
                            </div>
                        </Col>
                    </div>
                    <div
                        className={styles.miniFooter}
                        style={{
                            backgroundColor: newTheme.colors.footer,
                        }}
                    >
                        <p>This is the footer</p>
                    </div>
                </div>
                <div className={styles.customOptions}>
                    <div className={styles.colorPicker}>
                        <div className={styles.labels}>
                            <p>NavBar background color</p>
                            <p>NavBars text color</p>
                            <p>Body background color</p>
                            <p>Body text color</p>
                            <p>Button background color</p>
                            <p>Button when mouse hover</p>
                            <p>Card background color</p>
                            <p>Card text color</p>
                            <p>Footer background color</p>
                        </div>
                        <div className={styles.colors}>
                            <input
                                type="color"
                                name="navBar"
                                value={newTheme.colors.navBar}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="navBarColor"
                                value={newTheme.colors.navBarColor}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="background"
                                value={newTheme.colors.background}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="text"
                                value={newTheme.colors.text}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="button"
                                value={newTheme.colors.button}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="buttonHover"
                                value={newTheme.colors.buttonHover}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="cardBG"
                                value={newTheme.colors.cardBG}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="colorCard"
                                value={newTheme.colors.colorCard}
                                onChange={handleColorChange}
                            />
                            <input
                                type="color"
                                name="footer"
                                value={newTheme.colors.footer}
                                onChange={handleColorChange}
                            />
                        </div>

                    </div>
                    <div className={styles.inputThemeName}>
                        <label>Name your theme: </label>
                        <input
                            className={styles.input}
                            value={newTheme.name}
                            name='name'
                            minLength="3"
                            maxLength="15"
                            title="Only letters allowed!"
                            onChange={handleNameChange}
                            type="text"
                            placeholder="Type here..."
                        />
                    </div>
                    <div>
                        <Button className={styles.saveTheme} onClick={handleSaveTheme}>
                            Save the theme
                        </Button>
                        <Button className={styles.saveTheme} onClick={handleRemoveTheme}>
                            Delete the theme
                        </Button>
                    </div>
                </div>

            </div>
        </Div >
    );
};

export default CustomTheme;