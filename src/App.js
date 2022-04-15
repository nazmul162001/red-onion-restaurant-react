import { Route, Routes } from "react-router-dom";
import BreakFast from "./components/BreakFast/BreakFast";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";

function App() {
  return (
    <div className="">
      <Header></Header>
      <HomePage></HomePage>
      <FoodMenu></FoodMenu>
      <Routes>
        <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
