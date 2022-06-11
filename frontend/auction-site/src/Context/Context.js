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

const fetchBrands = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(
      "https://private-anon-986a9a2685-carsapi1.apiary-mock.com/manufacturers"
    );
    return res.data;
    //   setAuth(res.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const fetchBid = async (identifier) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`/bids/${identifier}`);
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
  const [brands, setBrands] = useState([]);
  const [bid, setBid] = useState({});
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getPromotedCars = async () => {
      const cars = await fetchCars();
      const carBrands = await fetchBrands();

      setPromotedCars(cars.filter((car) => car.promoted === true));
      setSoldCars(cars.filter((car) => car.sold === true));
      setCurrentCars(cars.filter((car) => !car.sold && !car.promoted));
      setBrands(carBrands);
    };

    getPromotedCars().catch(console.error);
  }, []);

  const getBid = async (id) => {
    const currentBid = await fetchBid(id);

    setBid(currentBid);
  };

  const registerGuest = async () => {
    let Guest;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/users");
      setUser(res.data.guest);
      return res.data;
      //   setAuth(res.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

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
        brands,
        getBid,
        bid,
        registerGuest,
        user,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
