import React from 'react'
import './Header.css'
import reactLogo from '../assets/react.svg'
import matheus_image from '../assets/matheus.png'

function Header() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

  return (
    <div className='container_header'>
      <section className='section-header'>
            <h2 class="portfolio">Portfo<span>lio</span></h2>
            <img  className="logo" src={reactLogo} alt="" />
            <nav className="nav-main">
            <ul class="header-list">
                <li className="children-header-list"><a href="#profissional">Experiência e Cursos</a></li>
                <li className="children-header-list"><a href="#sobre" className="scroll-link" >Sobre mim</a></li>
                <li className="children-header-list"><a href="https://api.whatsapp.com/send?phone=+55(44)%2099975-5163&text=Ol%C3%A1+Matheus+Teodoro%2C+visitei+seu+portf%C3%B3lio+online+e+gostaria+de+bater+um+papo+com+voc%C3%AA%21.">Fale comigo</a></li>
            </ul>
        </nav>
        
        <div className='container_me'>

          <div className='card_self' >
            <img src={matheus_image} alt="" />
            <h2>Matheus Teodoro</h2>
            <p>Front-End Developer - React</p>
          </div>
        
        </div>

    </section>

    </div>
  
  )
}

export default Header
