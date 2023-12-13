import React from 'react'
import escritorio from '../assets/escritorio.jpg'
import matheus from '../assets/matheus.png'
import './SobreMim.css'
import hospital from '../assets/hospital.svg'
import mapa from '../assets/mapa.svg'

function SobreMim() {

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
        <article class="article-sobre" id='sobre'>
                <div className='article-sobre-links'>

                    <div>
                        <img src={escritorio} alt="" className="escritorio-img"/>
                    </div>
                    
                    <div className='child-sobre-section'>
                        <a href="#experiencia" className="scroll-link topicos">Ultimos Cursos</a>
                        <a href="#onde" className="scroll-link topicos">De onde eu vim?</a>
                        <a href="#onde" className="scroll-link topicos">Expêriencia de quase morte</a>
                        <a href="#onde" className="scroll-link topicos">Meus Hobbies</a>
                    </div>
                </div>

                <div class="article-sobre-card-1">
            
                    <img src={matheus} alt="" className="matheus-img"/>
               
                <div className="card-quem-2">
                    <h3  className="card-quem-title">Sou Matheus Teodoro</h3>
                    <p>Um jovem de 21 anos, morador de Marialva-PR, estudante (4º Período de A.D.S), cristão e tecladista.
                    Mas fora de todas essas coisas, sou apaixonado pelas coisas simples, gosto de ler, gosto de fazer um caminhada ouvindo música e ver o por sol, sou daquelas pessoas que gosta de um pouco de tudo, música classica ou queen Queen, gosto de ler e escrever também! Tenho um pré-projeto ciêntifico e um livro, de suspense quem estão em desenvolvimento.</p>
                    <p>Com 6 meses trabalhando na área, fui responsável por atualizar o design do site  em React da<a className="minus" href="https://minus.eco.br/"> Minus</a>, tenho experiência Front end com projetos e tratamento de responsividade, trabalhando com modelos no figma, e metodologia Kanban. </p>

                </div>
            </div>
            </article>
          

    <div class="card-hobby">
        <div>
            <img src={mapa} className="img-logos"/>
            <div   id='onde' className="card-quem-2">
                <h3>São Pedro do Ivaí - PR</h3>
                <p>Nascido em 2002, em uma cidade de 11.000 habitantes, onde vivi até o ano de 2013, quando aos 11 anos, me mudei juntamente com a família para Sumáre em São Paulo, onde vivi até 2022, foi lá onde minhas primeiras expêriencias profissionais aconteceram.</p>
                <h3 id='title-2'>Meu primeiro emprego </h3> 
                <p>Meu 1º Emprego  foi como jovem aprendiz aos 17, na empresa<a href="https://pt-br.selmi.com.br/" className="selmi-link"> Pastifício Selmi</a>, conhecida pelas marcas:Farinha Renata; Macarrão Galo, um emprego nada facil de conseguir, pois enfrentei um processo seletivo com 540 concorrentes e 3 etapas classificatórias, e com 32 aprovados no final,  pude aprender muita coisa sobre a vida profissional durante o contrato de 1 ano,quando retornei para O Paraná em 2022, trabalhei como auxiliar de pintor,Auxiliar de compras,Suporte Audiovisual, Estagiário de Suporte de T.I, até entrar na área de Desenvolvimento Web. </p>
            </div>
        </div>
       

        <div class="card-hospital">
                    <img src={hospital }alt="" className="img-logos"/>


                <div className="card-quem-2">
                    <h3>A Experiência do coma  </h3>
                    <p> Em 2018, vivi uma fase que mudou radicalmente minha perspectiva sobre a vida. Fui acometido por  meningite viral.

                        Tudo começou com a súbita manifestação de sintomas, que inicialmente confundiam médicos e especialistas.Foi quando numa sexta-feira comecei a ter crises de convulsão na escola, e fui socorrido e entubado , ja em coma  pelo Samu, internado na CTI do hospital estadual de Sumaré onde uma série de exames e investigações foi realizada, testando os limites do conhecimento médico para finalmente diagnosticar a meningite.</p>
                        <h3 id='title-2'>A recuperação  </h3>
                        <p>
                        Foi durante esses momentos de adversidade que testemunhei a incrível resiliência do corpo, a dedicação incansável dos profissionais de saúde e a fé dos que estavam ao meu redor também foram fortalecidas, 
                        A superação dessa provação não apenas fortaleceu minha apreciação pela vida, como aumentou minha gratidão pela oportunidade de continuar minha jornada. Esse episódio desafiador por um milagre nao me deixou sequelas ou cicatrizes físicas, porém forjou em mim um respeito enorme pela área da sáude e me deu uma nova visão de mundo. 
                    
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
    
}

export default SobreMim
