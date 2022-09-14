import React from 'react'
import { createContext, useState,  } from 'react'

export const ContextLogin = createContext();

export const Context = ({children}) => {
  const [token, setToken] = useState();
  const [loged, setLoged] = useState(false);
  let logi = false
  return (
    <ContextLogin.Provider value={{token, setToken, loged, setLoged, logi}}>
      {children}
    </ContextLogin.Provider>
  )
}

export default Context