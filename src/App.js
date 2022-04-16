import { Route, Routes } from 'react-router-dom';
import BreakFast from './components/BreakFast/BreakFast';
import Header from './components/Header/Header';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import DetailsFood from './components/DetailsFood/DetailsFood';
import { ContexProvider } from './Contex/CartContex';

function App() {
  return (
    <ContexProvider>
      <div className="">
        <Header></Header>
        <Routes>
          <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
          <Route path="/details" element={<DetailsFood></DetailsFood>}></Route>
        </Routes>
      </div>
    </ContexProvider>
  );
}

export default App;
