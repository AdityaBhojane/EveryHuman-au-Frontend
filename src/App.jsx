import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FetchData from "./Utils/FetechData";

const App = () => {
  // console.log(import.meta.env.VITE_EHS_API);
  console.log(FetchData())
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
