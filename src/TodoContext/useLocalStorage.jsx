import React from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [error, setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
  
    try { 
      React.useEffect(()=>{
        setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem)
        setLoading(false)
  
  
      },3000)
  
      },[initialValue, itemName])
  
    } catch(error){
      setError(error);
    }
    
    
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }