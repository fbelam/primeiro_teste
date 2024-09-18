import '../login/styles/register.css';
import image from './assets/image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação


async function pegarDadosDeAPI() {
  try {
      let resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Faz uma requisição a uma API
      let dados = await resposta.json();  // Espera os dados serem convertidos para JSON
      console.log(dados);  // Exibe os dados da resposta da API
  } catch (erro) {
      console.error("Erro ao buscar dados:", erro);  // Trate os erros que podem ocorrer
  }
}

pegarDadosDeAPI();

function login () {
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