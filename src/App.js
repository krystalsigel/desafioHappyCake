import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/planes" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
