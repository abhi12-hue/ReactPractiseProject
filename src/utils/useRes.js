import { useEffect , useState } from "react";
const useRes = (resId) =>{
    const [resInfo , setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[resId])

    const fetchData = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${resId}`);
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}
export default useRes;