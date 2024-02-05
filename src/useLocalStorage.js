import { useState, useEffect } from "react";

function uselocalStorage() {
  const [value, setValue] = useState((key, initialValue) => {
    
    const localValue = localStorage.getItem(key);
    
    if (localValue == null) {

      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
      
    } else {
      return JSON.parse(localValue);
    }
  });
}

export default uselocalStorage;
