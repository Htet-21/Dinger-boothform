import './App.css';
import Thuta from './Thuta';
import Htet from './Htet';
import Heinhtet from './Heinhtet';
import Kyawt from './Kyawt';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
        <Route path="/" element={<Htet />} />
        <Route path="htetarkarkyaw" element={<Htet />} />
        <Route path="kyawtphoosan" element={<Kyawt />} />
        <Route path="hsuthet" element={<Htet />} />
        <Route path="mono" element={<Htet />} />
        <Route path="sinsitsoe" element={<Htet />} />
        <Route path="tinthtoonaung" element={<Htet />} />
        <Route path="pyaethuta" element={<Thuta />} />
        <Route path="heinhtet" element={<Heinhtet />} />
      </Routes>
    </div>
     
  );
}

export default App;
