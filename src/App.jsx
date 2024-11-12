import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound' 
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProducts'
import ProductDetails from './Pages/Product/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'
import Order from './Pages/Order/Order'
import OrderSuccess from './Pages/Order/OrderSuccess'
import RequireAuth from './Components/Auth/RequireAuth'
import RequireAuthAndRole from './Components/Auth/RequireAuthandRole'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/denied' element={<Denied/>}/>
         <Route path='/auth/signup' element={<SignUp/>}/>
         <Route path='/auth/login' element={<Login/>}/>

         <Route element={<RequireAuthAndRole/>}>
            <Route path='/admin/addproducts' element={<AddProduct/>}/>
         </Route>

         <Route path='/product/:productId' element={<ProductDetails/>}/>

         <Route element={<RequireAuth/>}>
            <Route path='/cart' element={<CartDetails/>}/>
            <Route path='order' element={<Order/>}/>  
            <Route path="/order/success" element={<OrderSuccess/>}/>
         </Route>
         
         <Route path='*' element={<NotFound/>}/>
        
      </Routes>
  )
}

export default App
 