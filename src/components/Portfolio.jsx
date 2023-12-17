import React from 'react'
import site_cadeiras from '../assets/site-cadeiras.png'
import bot_discord from '../assets/bot-discord.jpg'
import logo_ominifood from '../assets/omnifood.jpg'
import todo_react from '../assets/todo-react.jpg'
import tela_pagamento from '../assets/tela-pagamento.jpg'
import tela_cadastro from '../assets/tela-cadastro.jpg'
import tela_quiz from '../assets/quiz-imagem.jpg'
import gerenciador_gastos from '../assets/gerenciador_gastos.jpg'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <div className='section-portfolio'>
        {/* 1 */}
      <div className='container-portfolio'>
            <h3>Projetos com React </h3>
            <div>
                 <a href="https://todo-list-react-smoky-alpha.vercel.app/" target='_blank'><img src={todo_react} alt="" /></a>
                <a href="https://app-gerenciador-gastos.vercel.app/" target='_blank'><img src={gerenciador_gastos} alt="" /></a>
            </div>
        </div>
        
        {/* 2 */}
        <div className='container-portfolio'>
            <h3>Projetos responsivos</h3>

            <div className='restaurante'>
                <a href="https://omnifood-restaurante.vercel.app/" target='_blank'><img src={logo_ominifood} alt="" /></a>
                <a href="https://quiz-perguntas-javascript.vercel.app/" target='_blank'><img src={tela_quiz} alt="" /></a>

            </div>
        </div>
            
        {/* 3 */}
        <div className='container-portfolio'>
            <h3>Projetos apenas desktop</h3>
            <div>
                <a href="https://landing-page-bot-discord.vercel.app/" target='_blank'><img src={bot_discord} alt="" /></a>
                <a href="https://site-de-venda-cadeiras.vercel.app/" target='_blank'><img src={site_cadeiras} alt="" /></a>
            </div>

        </div>
        <div className='container-portfolio'>
            <h3>Projetos na Faculdade</h3>
            <div>
                <a href="https://github.com/xPLACEBOx/EstacionamentoERP/tree/main" target='_blank'><img src={tela_pagamento} alt="" />
                <img src={tela_cadastro} alt="" /></a>
            </div>

        </div>

    </div>

  )
}

export default Portfolio
