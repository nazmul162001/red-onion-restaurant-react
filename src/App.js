import { Route, Routes } from "react-router-dom";
import BreakFast from "./components/BreakFast/BreakFast";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <Header></Header>
      <HomePage></HomePage>
      <FoodMenu></FoodMenu>
      <Routes>
        <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
      </Routes>
    </div>
  );
}

export default App;
