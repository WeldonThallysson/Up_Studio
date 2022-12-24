import React from 'react';
import { Link } from 'react-router-dom';
import './estilos.css'


/*Ultilizando Styled Components */

import {Conteiner,Nav,ListaItens,Itens,Logo} from './estilos'
export default function Cabecalho() {
 return (
   <div>
       <Conteiner>
       
        <Link to={'/'}>
         <Logo src={require('../../assets/Logo.png')} alt='Logo Up Studio'/></Link>
    

          <Nav>
            <ListaItens>
              
            <Link to={''} className='link'> <Itens className='itens'>Home</Itens></Link>
            <Link to={''} className='link'><Itens className='itens'>Produtos</Itens></Link>
            <Link to={''} className='link'><Itens className='itens'>Serviços</Itens></Link>
            <Link to={''} className='link'><Itens className='itens'>Fale Conosco</Itens></Link>
          </ListaItens>
          </Nav>
          </Conteiner>
   </div>
 );
}