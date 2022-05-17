import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SiteContext = createContext({});

const fetchCars = async () => {
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
  const [currentCars, setCurrentCars] = useState([]);
  const [test1, setTest1] = useState("hello");
  const [menuModal, setMenuModal] = useState(false);
  const [menu, setMenu] = useState([
    "Sedans",
    "Trucks",
    "SUVs",
    "Sport",
    "Classic",
    "Heavy",
    "Popular",
  ]);

  useEffect(() => {
    const getPromotedCars = async () => {
      const cars = await fetchCars();

      setPromotedCars(cars.filter((car) => car.promoted === true));
      setSoldCars(cars.filter((car) => car.sold === true));
      setCurrentCars(cars.filter((car) => !car.sold && !car.promoted));
    };

    getPromotedCars().catch(console.error);
  }, []);

  return (
    <SiteContext.Provider
      value={{
        test1,
        promotedCars,
        soldCars,
        menuModal,
        setMenuModal,
        menu,
        setMenu,
        currentCars,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
