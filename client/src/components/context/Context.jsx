import React from 'react'
import { createContext, useState,  } from 'react'

export const ContextLogin = createContext();

export const Context = ({children}) => {
  const [token, setToken] = useState("")
  return (
    <ContextLogin.Provider value={{token, setToken}}>
      {children}
    </ContextLogin.Provider>
  )
}

export default Context