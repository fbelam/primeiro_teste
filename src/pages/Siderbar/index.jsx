import React from 'react';
import './styles/app.css';
import profileImage from './assets/Frame.png';



function App() {
  return (
    <>
    <div className="App">
      <div className="sidebar">
        <h2>One Piece</h2>
        <ul>
          <li><a href="#">Fazer Orçamento</a></li>
          <li><a href="#">Pedidos</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">Configurações</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <input type="text" placeholder="Pesquisar..." />
          <img src={profileImage} alt="Perfil" className="profile-image" />
          </div>
        <div className='Conteudo'>
          <div className="card">
            <div className="sub-contente">

            </div>
          </div>
          <div className="card">
            <div className="sub-contente">

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

