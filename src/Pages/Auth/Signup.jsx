import { useState } from 'react'
import toast from 'react-hot-toast'
import SignUpPresentation from './SignUpPresentation'
import { createAccount } from '../../Redux/Slice/AuthSlice'
import { useDispatch }  from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SignUp(){
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [signUpState,setSignUpState] = useState({
      firstName:" ",
      email:" ",
      phNumber:" ",
      password:" "
   })

   function handleUserInput(e){
      const {name,value} = e.target
      setSignUpState({...signUpState,[name]:value})
   }

   async function handleFormSubmit(e){
      e.preventDefault()
      console.log(signUpState)

      if(!signUpState.firstName|| !signUpState.email || !signUpState.phNumber || !signUpState.password){
         toast.error("Miising values from the form")
         return
      }

      if(signUpState.firstName.length<5 || signUpState.firstName.length>10){
         toast.error("Name should be min 5 and max 20 characters long ")
         return
      }
      if(!signUpState.email.includes("@") || !signUpState.email.includes(".")){
         toast.error("Invaid email address")
         return
      }
      if(signUpState.phNumber.length>12){
         toast.error("Mobile number cant exceed 12 digits")
         return
      }
      if(signUpState.password.length<4){
         toast.error("Password too short")
         return
      }

      const apiResponse = await dispatch(createAccount(signUpState))
      console.log("API Response is : ",apiResponse)
      if(apiResponse.payload.data.success){
         navigate('/auth/login')
      }
   }
   
 return(
    <SignUpPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput}/>
 )
}

export default SignUp