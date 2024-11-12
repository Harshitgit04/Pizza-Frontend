import { useNavigate } from "react-router-dom"
import Layouts from "../../Layout/Layouts"

function OrderSuccess(){
    const navigate = useNavigate()
    return (
        <Layouts>
            <div className="flex flex-col justify-center items-center py-28">
                <p className="text-lg font-semibold">
                    Your order has been placed successfully
                </p>
                <button onClick={() => navigate('/')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
                >
                    Go Back Home
                </button>
            </div>
        </Layouts>
    )
}

export default OrderSuccess