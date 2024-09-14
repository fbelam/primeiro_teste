import '../Cadastro/styles/register.css';
import image from './assets/image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Definir o hook de navegação

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (response.ok) {
        setMessage('Usuário registrado com sucesso!');
        setTimeout(() => {
          navigate('/Login'); // Redireciona para a página de login após o cadastro
        }, 1000); 
      } else {
        setMessage('Erro ao registrar usuário.');
      }
    })
    .catch((error) => {
      console.error('Erro:', error);
      setMessage('Erro ao registrar usuário.');
    });
  };

  return (
    <div className="register-container">
      <div className="image-section">
      <img src={image} alt="teste" />
      </div>
      <div className="form-section">
        <h1>Registre-se</h1>
        <p>Já possui uma conta? <a href="#">Entre aqui</a> </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome:</label>
            <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />          
          </div>
          <div className="input-group">
            <label>Endereço de E-mail:</label>
            <input 
            type="email" 
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
          <p className="password-hint">
            Escolha uma senha com, no mínimo, 8 caracteres.
          </p>
          <div className="checkbox-group">
            <input type="checkbox" />
            <label>
              Eu aceito os <a href="#">Termos e Condições</a> e entendi a <a href="#">Política de Privacidade</a>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
        <p className="login-link">Already have an account? <a href="#">Log in</a></p>
      </div>
    </div>
  );
}

export default Signup;