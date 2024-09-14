import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'; // Importando o Link
import { useNavigate } from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login'); // Redireciona para a página de login
  };

  const handleLoginClick1 = () => {
    navigate('/register'); // Redireciona para a página de login
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">Sobre</a>
        <a href="#services" className="navbar-link">Servicos</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button" onClick={handleLoginClick}>Login</button>
        <button className="navbar-button" onClick={handleLoginClick1}>Casdastrar</button>
      </div>
    </nav>
  );
}

export default Nav;
