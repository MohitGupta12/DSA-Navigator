import React, { useState } from "react";
import { useEffect } from "react";

const getSavedValues = (key, initValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initValue instanceof Function) return initValue();
  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValues(key, initValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};

export default useLocalStorage;
