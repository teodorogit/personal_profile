import React from 'react'
import computador from '../assets/computer.svg'
import './Profissional.css'
import logo_react from '../assets/react.svg'
import logo_javascript from '../assets/javascript.svg'
import logo_python from '../assets/python.svg'
import logo_figma from '../assets/figma.svg'

function Profissional() {
  return (
    <div id="profissional">
      <div className='card-1'>
          <img className="picture" src={computador} alt="computador"/>
          <h3 id='experiencia' className='titulo'>Experiência como Developer</h3>
          
      </div>


      <div className="sections-profissional">
          <div className='card'>
          <p>Atuando como Trainne <br></br>Full Stack at <a className="minus" href="https://minus.eco.br/">Minus</a></p>
              <p>Expêriencia na Área: 6 Meses</p>

             
                  <p>Tecnologias :</p>
                  <p>HTML5, CSS3, SCSS</p>
                <div className="tecno">
                              
                              <img src={logo_react}alt="" className="tecnos-logos"/>
                              <img src={logo_javascript} alt=""className="tecnos-logos"/>
                              <img src={logo_python} alt=""className="tecnos-logos"/>
                                <img src={logo_figma}alt=""className="tecnos-logos"/>

                            </div>
                </div>
         
             <div>
              <div className='card'>
              <h3 className='titulo'>Ultimos cursos</h3>
              <p> React complete Guide - <a className='udemy-link' href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'>Udemy</a></p>
              <p>Python do básico ao avançado - <a className='udemy-link' href='https://www.udemy.com/course/curso-de-programacao-em-python-do-basico-ao-avancado/'>Udemy</a> </p>
              <p> Git e Github - <a  className='udemy-link' href="https://www.udemy.com/course/git-e-github-para-iniciantes/">Udemy</a></p>
              <p>Html e Css - Real World- <a className='udemy-link' href='https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/'>Udemy</a></p>
          </div>
        </div>
       </div>
</div>
  )
}

export default Profissional
