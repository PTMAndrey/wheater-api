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
  
  return <StateContext.Provider
    value={{
      alert,
      setAlert,
      selectedCity,
      setSelectedCity,

    }}
  >{children}</StateContext.Provider>;
};

export default StateContext;
