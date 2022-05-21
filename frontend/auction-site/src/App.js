import "./App.css";
import { dataBase } from "./Data";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Navbar } from "./Pages/Components/navbar/Navbar";
import Navbar2 from "./Pages/Components/navbar/Navbar2";
import { Footer } from "./Pages/Components/footer/Footer";
import { SiteContextProvider } from "./Context/Context";
import { MenuModals } from "./Pages/Components/modals/Menu/MenuModals";
import { AppHeader } from "./Pages/Components/AppHeader/AppHeader";
import { Bid } from "./Pages/Bid/Bid";

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
