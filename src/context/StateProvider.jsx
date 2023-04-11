import { createContext, useState, useEffect } from 'react';
import getFormattedWeatherData from '../components/services/weatherService';
// import { } from '../api/API';

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "Bucharest" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Bucharest");
  const [idSelectedCity, setIDSelectedCity] = useState("ROB");
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : {});
  const [fromFavorites, setFromFavorites] = useState(false);
  const [findMyLocation, setFindMyLocation] = useState(false);
  // alert
  const [alert, setAlert] = useState(null);
  if (alert) {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      if (findMyLocation) { setQuery({q: data.nume}); setSelectedCity(data?.name); setIDSelectedCity(data?.country + data?.name); setFindMyLocation(false) }
    });
  };


  useEffect(() => {
    fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, units, fromFavorites, selectedCity]);

  return <StateContext.Provider
    value={{
      alert,
      setAlert,
      query,
      setQuery,
      units,
      setUnits,
      weather,
      setWeather,
      selectedCity,
      setSelectedCity,
      idSelectedCity,
      setIDSelectedCity,
      favorites,
      setFavorites,
      fromFavorites,
      setFromFavorites,
      fetchWeather,
      findMyLocation,
      setFindMyLocation,
    }}
  >{children}</StateContext.Provider>;
};

export default StateContext;
