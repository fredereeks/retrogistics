import React, { createContext, useState } from 'react'
// import { toast } from 'react-hot-toast'
import bcryptjs from 'bcryptjs'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("current_user")) || null)
    const [darkMode, setDarkMode] = useState((localStorage.getItem("darkMode")) || false)

    const handleDarkMode = () => {
      setDarkMode(prev => !prev)
      localStorage.setItem("darkMode", darkMode)
    }

    const login = async(inputs) => {
        const bookaveUsers = JSON.parse(localStorage.getItem("bookave_users")) || []
        const findUser = bookaveUsers?.find(user => user?.username === inputs.username.toLowerCase() || user?.email === inputs.username.toLowerCase())
        if(findUser) {
          const matchPassword = await bcryptjs.compare(inputs.password, findUser.password);
          if(matchPassword) {
            // toast.success(`Welcome Back ${findUser.fullname}`, {id: "70"})
            setCurrentUser(findUser)
            localStorage.setItem("current_user", JSON.stringify(findUser))
          }
        //   else toast.error(`Sorry, You have supplied an invalid credential`, {id: "70"})
        }
        // else toast.error(`We have no user with these details`, {id: "70"})
    }
    
    const register = async(inputs) => {
        const bookaveUsers = JSON.parse(localStorage.getItem("bookave_users")) || []
        const findUser = bookaveUsers?.filter(user => user?.username === inputs.username.toLowerCase() || user?.email === inputs.email.toLowerCase())
        if(findUser?.length > 0) {
        //   toast.error(`Sorry, we have a user with this email/username`, {id: "70"})
        }
        else {
          const salt = bcryptjs.genSaltSync(10)
          const hashPassword = bcryptjs.hashSync(inputs.password, salt)
          console.log({hashPassword})
          const updatedUsers = [...bookaveUsers, {...inputs, username: inputs.username.toLowerCase(), email: inputs.email.toLowerCase(), password: hashPassword, createdAt: Date.now()}]
          localStorage.setItem("bookave_users", JSON.stringify(updatedUsers))
        //   toast.success(`Welcome ${inputs.fullname} to Bookave`, {id: "70"})
        }

    }

  return (
    <AuthContext.Provider value={{currentUser, darkMode, handleDarkMode, login, register}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;