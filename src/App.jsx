import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Register from './pages/Cadastro/Register';
import Feed from './pages/feed/index';
import Home from './pages/Home/index';

function Nav() {
   return(
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
   )
}
export default Nav;
