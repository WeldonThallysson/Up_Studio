import React from 'react';
import { motion } from 'framer-motion';
import Poster1 from "../../assets/Poster1.png"
import Posterupstudio from "../../assets/UpStudioPoster.png"
import { Imagem} from './estilos';
import './estilos.css'
export default function Slider() {

  const images = [Poster1,Posterupstudio]

 return (
  <div className='App'>
   <motion.div className='Carrousel' whileTap={{cursor: "grabbing"}}>
   
    <motion.div className='inner' drag="x">
      {images.map((item) => (
        <motion.div key={item} className="conteiner__imagens">
         <Imagem src={item}/>
        </motion.div>
      ))}
    </motion.div>
   </motion.div>
  </div>
  );
}