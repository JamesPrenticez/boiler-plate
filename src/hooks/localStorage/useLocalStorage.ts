import { useState, useEffect } from "react";

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

export const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error retrieving value from localStorage: ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error storing value in localStorage: ${error}`);
    }
  }, [key, storedValue]);

  const setValue: SetValue<T> = (value) => {
    setStoredValue((prevValue) => {
      const newValue = value instanceof Function ? value(prevValue) : value;
      try {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(`Error storing value in localStorage: ${error}`);
      }
      return newValue;
    });
  };

  return [storedValue, setValue];
};

// Uasge
// import React from 'react';
// import useLocalStorage from './useLocalStorage';

// const MyComponent: React.FC = () => {
//   const [count, setCount] = useLocalStorage<number>('count', 0);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default MyComponent;
