import React from 'react'
import imagem_portfolio from '../assets/portfolio.jpg'
import imagem_espaco from '../assets/espaco.jpg'
import './Hobbies.css'


const Hobbies = () => {
  return (
    <div className='hobbies-container'>
        <div>
            <h3>Modularização das pastas</h3>
            <div>
              <img src={imagem_portfolio} alt="" />
            </div>
            <p>Sobre esse site: Ele é construido utilizando Vite +  React  com styled components</p>
            
        </div>
        <div>
            <h3>Hobbies </h3>
            <img src={imagem_espaco} alt="" />
    <p>Clique para interagir</p>
            <div className='card-hobbies'>
             <a href="https://www.facebook.com/100005651013733/videos/367479812447179/" target="_blank">Violino</a>
              <a href="https://www.facebook.com/100005651013733/videos/232643852903747/" target="_blank">Teclado</a>
              <a href='https://docs.google.com/document/d/1RRdSoHkFxsabNayVzuE8B14Mp1IpTZvYA2CoD0U_rkQ/edit?usp=sharing' target='_blank'>Ler meu livro</a>
              
            
            </div>
            
        </div>
      
      
    </div>
  )
}

export default Hobbies
