import { useEffect, useState } from "react"

const useDebounce = (func,delay)=>{
    const [value,setValue] = useState(func)

    useEffect(()=>{
       const timeoutId = setTimeout(()=>{
        setValue(func)
       },delay); 
       return ()=>{
        clearTimeout(timeoutId)
       }
    },[func])
    return value
}

export default useDebounce;