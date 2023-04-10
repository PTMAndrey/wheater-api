import React, { useEffect, useState } from 'react'
import useStateProvider from '../../hooks/useStateProvider'
import { UilFavorite , UilSad,UilHome} from "@iconscout/react-unicons";
import { CardStyled, Div, H1, H3, H4, H6, P } from '../../styles/HomeStyles';
import styles from '../../components/cardTodayForecast/CardTodayForecast.module.scss';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {

    const navigate = useNavigate();
    const { setAlert, favorites, setFavorites } = useStateProvider();
    const [isFavorite, setIsFavorite] = useState(true);
    const [favCityID, setFavCityID] = useState(true);

    const handleFavorites = (_key, _value) => {
        setFavCityID(_key);

        const newDictionary = Object.fromEntries(
            Object.entries(favorites).filter(([key]) => key !== _key)
        );
        setFavorites(newDictionary);
        setAlert({ type: 'danger', message: _value + ' was removed from favorites cities' });

    }
    
    return (
        <div className={styles.favoritePage}>

            {Object.keys(favorites).length !== 0 && Object.entries(favorites).map(([key, value]) => (
                <CardStyled className={`${styles.cardToday} m-4`} key={key}>
                    <Div className={styles.favContainer}>
                        <div>
                            <H3>{value}</H3>
                        </div>
                        <Div >
                            <UilFavorite className={styles.favorite} onClick={() => handleFavorites(key, value)} />
                        </Div>
                    </Div>
                </CardStyled>
            ))
            
            }

            {Object.keys(favorites).length === 0 &&
                <Div className={`${styles.cardToday} m-4`}>
                    <H4>You don't have cities saved as favorites <UilSad/> </H4>
                    <H4>
                        Select now a city and save it as a favorite!
                    </H4>
                    <Div onClick={()=>navigate('/')} style={{cursor:"pointer"}}>
                        <UilHome/> Visit the home page
                    </Div>
                </Div>
            }

        </div>
    )
}

export default Favorites;