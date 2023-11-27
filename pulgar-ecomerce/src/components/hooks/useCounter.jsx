import { useState } from "react";


export const useCounter = (item, min, max) => {
  const [count, setCount] = useState(min);

  const handleIncrease = () => {
    if (count < max) setCount(count + 1);
  };

  const handleReduce = () => {
    if (count > min) setCount(count - 1);
  };


  return {
    count,
    handleReduce,
    handleIncrease
  };
};
