// import {createContext,useState,useEffect} from "react"
import {createContext,useState} from "react"

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)
   const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)
   
   const handleDarkMode = () => {
    setDarkMode(prev => !prev)
    localStorage.setItem("darkMode", darkMode)
   }

   const login = () => {}
   const logout = () => {
     setCurrentUser(null)
   }
   const signup = () => {}

   return(
      <GlobalContext.Provider value={{currentUser, darkMode, handleDarkMode, login, logout, signup}}>
         {children}
      </GlobalContext.Provider>
   )
}