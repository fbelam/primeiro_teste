import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação
import Nav from '../nav/Nav';

function Feed() {

    return (
      <>
       <Nav/>
        <h1>Pagina Feed</h1>
      </>
    )
  }
  
export default Feed;