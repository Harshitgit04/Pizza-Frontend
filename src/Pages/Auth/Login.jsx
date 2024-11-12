import { useState } from "react"
import LoginPresentation from "./LoginPresentation"
import { loginAccount } from "../../Redux/Slice/AuthSlice"
import toast from "react-hot-toast"
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

function Login(){
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [loginData,setLoginData] = useState({
      email:" ",
      password:" "
   })

   function handleUserInput(e){
      const {name,value} = e.target
      setLoginData({
         ...loginData,
         [name] : value
      })
   }

   async function handleFormSubmit(e){
      e.preventDefault()
      console.log(loginData)

      if(!loginData.email || !loginData.password){
         toast.error("Miising values from the form")
         return
      }

      if(!loginData.email.includes("@") || !loginData.email.includes(".")){
         toast.error("Invaid email address")
         return
      }

      if(loginData.password.length<4){
         toast.error("Password too short")
         return
      }

      const apiResponse = await dispatch(loginAccount(loginData))
      console.log("API Response is : ",apiResponse)
      if(apiResponse.payload.data.success){
         navigate('/')
      }
   }

 return( <LoginPresentation  handleUserInput={handleUserInput} handleFormSubmit={handleFormSubmit}/>
 )
}

export default Login