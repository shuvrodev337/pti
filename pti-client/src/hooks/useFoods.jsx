import axios from "axios";
import { useEffect, useState } from "react";

const useFoods = () => {
    const [isLoading, setIsLoading] =useState(false)
    const [foods,setFoods] = useState([])
    const [serverError,setServerError] = useState(null)
    const url = 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10'
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
    },[])
return [isLoading,foods,setFoods, serverError]
};

export default useFoods;