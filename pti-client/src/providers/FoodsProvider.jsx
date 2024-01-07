import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const FoodContext = createContext()

const FoodsProvider = ({children}) => {

    const [isLoading, setIsLoading] =useState(false)
    const [foods,setFoods] = useState([])
    const [serverError,setServerError] = useState(null)
    // const url = 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10'
    // Due to above insecure (HTTP) endpoint, I have made an alternative server and an api endpoint with same data.
    const url = 'https://pti-server.vercel.app/all-foods'

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async()=>{
            try {
                const res = await axios.get(url)
                const foods = await res?.data?.Items
                setFoods(foods)
                setIsLoading(false)
            } catch (error) {
                setServerError(error)
                setIsLoading(false)
            }
        }
        fetchData()
    },[url])




    const foodInfo = {isLoading,foods,setFoods, serverError}
    return (
        <FoodContext.Provider value={foodInfo}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodsProvider;