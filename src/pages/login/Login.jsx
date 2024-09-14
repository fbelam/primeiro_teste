import '../login/styles/register.css';
import image from './assets/image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação


const login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Definir o hook de navegação
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples: Email e senha hardcoded
    const validUser = {
      email: 'admin@admin.com',
      password: 'admin'
    };
    if (formData.email === validUser.email && formData.password === validUser.password) {
        setErrorMessage('');
        navigate('/home'); // Redireciona para outra página (exemplo de dashboard)
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
}

  return (
    <div className="register-container">
      <div className="image-section">
      <img src={image} alt="teste" />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input 
            type="text" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />          
          </div>

          <div className="input-group">
            <label>Senha:</label>
            <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />          </div>

          <div className="checkbox-group">
            <input type="checkbox" />
            <label>
              Eu aceito os <a href="#">Termos e Condições</a> e entendi a <a href="#">Política de Privacidade</a>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Logar</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
        <p className="login-link">Esqueceu a senha? <a href="#">Clique aqui</a></p>
      </div>
    </div>
  );
}

export default login;