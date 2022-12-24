import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './estilos.css'

export default function Corpo(){
    return(
        <div className="Conteiner">
            <section className='Conteiner__Texto'>
             <h1 className="titulo_Principal">Quem Somos</h1>
              <span className="descricao__Principal">A <strong><i>Up Studio</i></strong> nasceu com o propósito de trazer inovação e práticidade para todos os nossos clientes e usuários através de nossos sites e Apps totalmente gratuitos, além de serviços de tecnologia !</span>
            </section>

                <Link className="botao" to={'/'}>Explorar</Link>
        </div>

    )
}



