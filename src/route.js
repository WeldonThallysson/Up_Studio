import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Cabecalho from "./Components/Cabeçalho";


import React from 'react';


export default function RouteApp() {
 return (
   <BrowserRouter>
    <Cabecalho/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>

   </BrowserRouter>
  );
}