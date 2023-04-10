import { createContext, useState, useEffect } from 'react';
// import { } from '../api/API';

const StateContext = createContext({});

export const StateProvider = ({ children }) => {

  // alert
  const [alert, setAlert] = useState(null);
  if (alert) {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }


  const [selectedCity, setSelectedCity] = useState("Bucuresti");
  const [idSelectedCity, setIDSelectedCity] = useState("RO-B");

  const [favorites, setFavorites] = useState( localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : {} );

  useEffect(() => {
    console.log("favorites: \n"+JSON.stringify(favorites))
    localStorage.setItem('favorites', JSON.stringify(favorites));

  }, [favorites])

  return <StateContext.Provider
    value={{
      alert,
      setAlert,
      selectedCity,
      setSelectedCity,
      idSelectedCity,
      setIDSelectedCity,
      favorites,
      setFavorites,

    }}
  >{children}</StateContext.Provider>;
};

export default StateContext;
