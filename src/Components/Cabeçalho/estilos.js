import styled from "styled-components";



 export const Conteiner = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 background-color: #0d0058;
 height: 80px;
 padding: 0 25px 5px;
 `;


 export const Nav = styled.nav`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: row;
 `;

 export const ListaItens = styled.ul`
 display: flex;
 width:100%
 flex-direction: row;
 padding-top: 5%;
 `;

 export const Itens = styled.li`
 display: flex;
 flex-direction: row;
 padding: 10px;
 font-size: 17px;
 font-weight: bold;
 color: azure;
 font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 `

 export const Logo = styled.img`
    width: 200px;
    height: 170px;
    margin-bottom: 1%
 `