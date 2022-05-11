import "./App.css";
import { dataBase } from "./Data";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Navbar } from "./Pages/Components/navbar/Navbar";
import Navbar2 from "./Pages/Components/navbar/Navbar2";
import { Footer } from "./Pages/Components/footer/Footer";
import { SiteContextProvider } from "./Context/Context";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const data = dataBase;

  return (
    <SiteContextProvider>
      <div className="">
        <div>
          <Navbar />
          <Navbar2 placeholder="Search for a car..." data={data} />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </SiteContextProvider>
  );
}

export default App;
