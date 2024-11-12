import { useSelector } from 'react-redux'
import pizzaLogo from '../assets/Images/pizzaLogo.jpg'
import Footer from '../Components/Footer'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/Slice/AuthSlice'
import {Link, useNavigate} from 'react-router-dom'
import CartIcon from '../assets/Cart.svg'
import { useEffect } from 'react'
import { getProductsOfCart } from '../Redux/Slice/CartSlice'

function Layouts({children}){
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cartsData} = useSelector((state)=>state.cart)

    function handleLogout(e){
        e.preventDefault()
        dispatch(logout())
    }
    async function fetchCartDetails(){
        const res = dispatch(getProductsOfCart())
        if(res?.payload?.isUnauthorized){
            dispatch(logout())
        }
    }

    useEffect(()=>{
        if(isLoggedIn){
            fetchCartDetails()
        }
    },[])
    
    return(
        <div>

         <nav className="flex flex-wrap items-center justify-around font-bold text-[#6B7280] text-xl h-16 border-none shadow-md ">
            <div className="flex items-center jsutify-center" onClick={()=>{navigate('/')}}>
                The Pizza App
                <img className="w-12"src={pizzaLogo} alt="pizzaLogo"/>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-4'>
                    <li className='hover:text-[#FF9110]'>
                        {" "}
                        <p>Menu {" "}</p>
                    </li>
                    <li className='hover:text-[#FF9110]'>
                        {" "}
                        <p>Services {" "}</p>
                    </li>
                    <li className='hover:text-[#FF9110]'>
                        {" "}
                        <p>About {" "}</p>
                    </li>
                </ul>  
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li className='hover:text-[#FF9110]'>
                        { isLoggedIn?
                                (<Link onClick={handleLogout}>LogOut</Link>)
                                :(<Link to={"/auth/login"}>LogIn</Link>)
                            }
                    </li>

                    {isLoggedIn && (
                        <Link to={'/cart'}>
                            <li> 
                                <img src={CartIcon} className='h-8 w-10'/> 
                                {' '}
                                {cartsData?.items?.length}
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
         </nav>

         {children}

         <Footer/>

        </div>
    )
}

export default Layouts