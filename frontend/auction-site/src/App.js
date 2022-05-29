import "./App.css";
import { dataBase } from "./Data";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Navbar } from "./Components/navbar/Navbar";
import Navbar2 from "./Components/navbar/Navbar2";
import { Footer } from "./Components/footer/Footer";
import { SiteContextProvider } from "./Context/Context";
import { MenuModals } from "./Components/modals/Menu/MenuModals";
import { AppHeader } from "./Components/AppHeader/AppHeader";
import { Bid } from "./Pages/Bid/Bid";
import anim1 from "./anim1.svg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const data = dataBase;

  return (
    <SiteContextProvider>
      <div className="">
        <div>
          <MenuModals />
          <Navbar />
          <AppHeader />
          <Navbar2 placeholder="Search for a car..." data={data} />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/bid/:id" element={<Bid />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </SiteContextProvider>
  );
}

export default App;
