import "./App.css";
import HomePage from "./components/pages/HomePage.component";
import NavBar from "./components/nav/Nav.component";
import Contact from "./components/Contact/Contact.components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
