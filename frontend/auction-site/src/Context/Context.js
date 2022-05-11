import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SiteContext = createContext({});
const fetchPromotedCars = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get("/main");
    return res.data;
    //   setAuth(res.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const SiteContextProvider = ({ children }) => {
  const [promotedCars, setPromotedCars] = useState([]);
  const [soldCars, setSoldCars] = useState([]);
  const [test1, setTest1] = useState("hello");

  useEffect(() => {
    const getPromotedCars = async () => {
      const cars = await fetchPromotedCars();

      setPromotedCars(cars.filter((car) => car.sold === false));
      setSoldCars(cars.filter((car) => car.sold === true));
    };
    getPromotedCars().catch(console.error);
  }, []);

  return (
    <SiteContext.Provider value={{ test1, promotedCars, soldCars }}>
      {children}
    </SiteContext.Provider>
  );
};
