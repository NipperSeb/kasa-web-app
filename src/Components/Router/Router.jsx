import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Accomodations from "../../Pages/Accomodations/Accomodations";
import NotFound from "../../Pages/NotFound/NotFound";

function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodations/:id" element={<Accomodations />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
