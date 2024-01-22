import React from 'react'
import './Profissional.css'
import logo_react from '../assets/react.svg'
import logo_javascript from '../assets/javascript.svg'
import logo_python from '../assets/python.svg'
import logo_figma from '../assets/figma.svg'
import logo_sass from '../assets/sass-svg.svg'
import CardProfissional from './cards/CardProfissional'
import logo_youtube from '../assets/icone_youtube.png'
import logo_udemy from '../assets/icone_udemy.png'
import logo_cursovideo from '../assets/icone_cursovideo.jpg'
import logo_bradesco from '../assets/icone_bradesco.jpg'
import logo_recode from '../assets/icone_recode.jpg'

function Profissional() {
  return (
    <div id="profissional">
          <h3 id='experiencia' className='titulo'>Experiência como Developer</h3>

      <div className="sections-profissional">
            <CardProfissional 
            titulo='Experiência Profissional'
            conteudo=' Atuando como Trainne Full Stack,trabalhando em projetos baseados em modelo no Figma, fui responsável por atualizar a versão do site em produção da empresa utilizando React,ja reproduzi em figma algumas telas dos Apps que desenvolvemos, atualmente trabalhando desenvolvendo o Front-End, de uma plataforma de compra de mercadorias junto com outros Devs, utilizando React e consumo de Api | ApiRest.'
            dado='Tecnologias:'
            img={logo_figma}
            img1={logo_react}
            img2={logo_javascript}
            img3={logo_python}
            img4={logo_sass}
            main=' 7 meses de experiência '
            />
            <CardProfissional 
            titulo='Ultimos cursos'
            conteudo='React complete Guide -Udemy | Python do básico ao avançado -Udemy, Git e Github -Udemy ,Html e Css Real World -Udemy'  
            dado='Cursos sobre React: React for Beginner: egghead.io, React básico - Matheus Battisti, React complete guide - Udemy, CFB Cursos React Completo'
            img={logo_youtube}
            img1={logo_udemy}
            img2={logo_cursovideo}
            img3={logo_bradesco}
            img4={logo_recode}
            />
          </div>
        </div>

  )
}

export default Profissional
