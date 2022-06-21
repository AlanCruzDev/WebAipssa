import React,{useState} from 'react'

export const useCounter = () => {

    const [count, setCount] = useState(0);
    const increment = () => setCount(x => x + 1);
    const reset = () => setCount(0);
    return{increment,reset,count}
}
