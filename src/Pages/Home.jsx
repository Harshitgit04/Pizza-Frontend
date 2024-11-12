import pizzaImage from "../assets/Images/pizza.jpeg"
import IconArrowRight from "../Components/Icons/RightArrow"
import pizzaCook from "../assets/Images/cook.jpg"
import IconPatchCheck from "../Components/Icons/IconPatchCheck"
import IconClipboardCheck from "../Components/Icons/OrderFood"
import Layouts from "../Layout/Layouts"
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"
import { getAllProducts } from "../Redux/Slice/ProductSlice"
import { Link } from "react-router-dom"

function Home(){
    const dispatch = useDispatch()
    const {productsData} = useSelector((state)=>state.product)

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    return(
        <Layouts>
        <div>
            {/*Hpme Section */}
            <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7
                bg-gradient-to-r from-amber-50 to-orange-300">
            
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 
                        to-orange-300 bg-clip-text">Enjoy the slice</h1>
                    </div>
            
                    <p className="pb-4 text-xl font-bold text-[#687280]">The pizza app lets you order your favourite pizza at your comfort</p>
                    <button className="px-4 py-2 text-xl font-bold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group">Order Now
                        <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                    <IconArrowRight/>
                        </span>
                     </button>
                </div>
           
                <div>
                    <img src={pizzaImage}
                     alt="pizza"
                     width={800}
                     height={800}/>
                </div>
            </section>  

            {/*Services Section */}
            <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300 ">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2"> 
                        <img src={pizzaCook}
                             alt="pizzaCook"
                             className="rounded-lg"
                             width={500}
                        />
                    </div>
                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <div>
                                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font     bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text ">Cooked by the  <br/>best chefs in world</h2>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex itens-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="w-10 h-10 mr-2"/>
                                <span className="text-3xl title-font font-bold">Perfect Taste</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex itens-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="w-10 h-10 mr-2"/>
                                <span className="text-3xl title-font font-bold">Fast Preparation</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex itens-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="w-10 h-10 mr-2"/>
                                <span className="text-3xl title-font font-bold">Hygeinic food</span>
                            </div>
                        </div>
                        <div className="px-5 py-4 mx-auto">
                            <div className="flex justify-center py-4">
                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"> </div>
                            </div>
                            <div className="flex flex-wrap space-y-6 md:space-y-0">
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 mb-5">
                                       <IconClipboardCheck className="w-20 h-20"/> 
                                    </div>
                                    <div className="flex-grow ">
                                        <h2 className="mb-3 test-lg font-bold text-gray-900 title-font">
                                            Order Food
                                        </h2>
                                        <p className="text-base leading-relaxed "> Select your favourite pizza and place your order</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 mb-5">
                                       <IconClipboardCheck className="w-20 h-20"/> 
                                    </div>
                                    <div className="flex-grow ">
                                        <h2 className="mb-3 test-lg font-bold text-gray-900 title-font">
                                            Pickup Food
                                        </h2>
                                        <p className="text-base leading-relaxed "> Pickup from your nearest store </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 mb-5">
                                       <IconClipboardCheck className="w-20 h-20"/> 
                                    </div>
                                    <div className="flex-grow ">
                                        <h2 className="mb-3 test-lg font-bold text-gray-900 title-font">
                                            Enjoy Food
                                        </h2>
                                        <p className="text-base leading-relaxed "> Enjoy it to the fullest </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {productsData.map((item)=>{
                        return(
                            item.inStock && <div className="p-4 md:w-1/3" key={item._id}>
                                <Link to={`/product/${item._id}`}>
                                    <div className="overflow-hidden border rounded-lg border-opacity-60">
                                            <img src={item.image}
                                             alt = "Pizza Image"
                                             className="object-cover object-center w-full lg:h-48 md:h-36"
                                             />
                                            <div className="p-6 border">
                                                <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font"> 
                                                    {item.category}
                                                </h2>
                                                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                    {item.name}
                                                </h1>
                                                <p className="mb-4 text-base leading-relaxed"> 
                                                    {item.description}
                                                </p>
                                                <p className="text-lg font-medium text-gray-900 title-font">
                                                    ${item.price}
                                                </p>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </Layouts>
    )
}

export default Home