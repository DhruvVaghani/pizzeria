
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}
        />
        <Route path="/menu" element={<Menu/>}
        />
        <Route path="/contact" element={<Contact/>}
        />
      </Routes>
      <Footer/>
  </Router>
    </div>
  );
}

export default App;
