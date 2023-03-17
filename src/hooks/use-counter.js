import { useEffect, useState } from "react";

const useCounter = (initialCount) => {

    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    },[count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return {
        count: count,
        increment: handleClick,
    }
};

export default useCounter;
