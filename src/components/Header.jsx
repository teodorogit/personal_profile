import React from 'react'
import './Header.css'
import reactLogo from '../assets/react.svg'

function Header() {
  var scrollLinks = document.querySelectorAll('.scroll-link');

  // Adicione um evento de clique a cada link
  scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          // Obtenha o destino do link usando o atributo href
          var targetId = this.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);

          // Role suavemente até o elemento de destino
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });

  return (
    <div>
      <section className='section-header'>
        <div>
            <h2 class="portfolio">Portfo<span>lio</span></h2>
            <img  className="logo" src={reactLogo} alt="" />
        </div>
   
        <nav className="nav-main">
            <ul class="header-list">
                <li className="children-header-list"><a href="#profissional">Experiência e Cursos</a></li>
                <li className="children-header-list"><a href="#sobre" className="scroll-link" >Sobre mim</a></li>
                <li className="children-header-list"><a href="https://api.whatsapp.com/send?phone=+55(44)%2099975-5163&text=Ol%C3%A1+Matheus+Teodoro%2C+visitei+seu+portf%C3%B3lio+online+e+gostaria+de+bater+um+papo+com+voc%C3%AA%21.">Fale comigo</a></li>
            </ul>
        </nav>
    </section>
    </div>
  )
}

export default Header
