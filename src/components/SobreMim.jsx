import matheus from '../assets/matheus.png'
import './SobreMim.css'
import hospital from '../assets/hospital.svg'
import CardHobbie from './cards/CardHobbie'
import React from 'react';
import Carrousel from './Carrousel'
import CardProfissional from '../components/cards/CardProfissional'

function SobreMim() {
  return (
    <div>
    <div className='conteudo_container' id='sobre'>

                <CardProfissional
                titulo='Quem eu sou?'
                conteudo='Um jovem de 21 anos, morador de Marialva-PR, estudante (4º Período de A.D.S), cristão e tecladista.
                Mas fora de todas essas coisas, sou apaixonado pelas coisas simples, gosto de ler, gosto de fazer um caminhada ouvindo música e ver o por sol, sou daquelas pessoas que gosta de um pouco de tudo, música classica ou queen Queen, gosto de ler e escrever também! Tenho um pré-projeto ciêntifico e um livro, de suspense quem estão em desenvolvimento.</p>
                <p>Com 6 meses trabalhando na área, fui responsável por atualizar o design do site  em React da Minus, tenho experiência Front end com projetos e tratamento de responsividade, trabalhando com modelos no figma, e metodologia Kanban. '
                />
                            
                <CardProfissional
                titulo='De onde eu vim?'
                conteudo='São Pedro do Ivaí - PR
                Nascido em 2002, em uma cidade de 11.000 habitantes, onde vivi até o ano de 2013, quando aos 11 anos, me mudei juntamente com a família para Sumáre em São Paulo, onde vivi até 2022, foi lá onde minhas primeiras expêriencias profissionais aconteceram.
                Meu primeiro emprego  
                Meu 1º Emprego  foi como jovem aprendiz aos 17, na empresa, conhecida pelas marcas:Farinha Renata; Macarrão Galo, um emprego nada facil de conseguir, pois enfrentei um processo seletivo com 540 concorrentes e 3 etapas classificatórias, e com 32 aprovados no final,  pude aprender muita coisa sobre a vida profissional durante o contrato de 1 ano,quando retornei para O Paraná em 2022, trabalhei como auxiliar de pintor,Auxiliar de compras,Suporte Audiovisual, Estagiário de Suporte de T.I, até entrar na área de Desenvolvimento Web.'/>

                <CardProfissional 
                titulo='A Experiência do coma'  
                conteudo='Em 2018, vivi uma fase que mudou radicalmente minha perspectiva sobre a vida. Fui acometido por  meningite viral.
                Tudo começou com a súbita manifestação de sintomas, que inicialmente confundiam médicos e especialistas.Foi quando numa sexta-feira comecei a ter crises de convulsão na escola, e fui socorrido e entubado , ja em coma  pelo Samu, internado na CTI do hospital estadual de Sumaré onde uma série de exames e investigações foi realizada, testando os limites do conhecimento médico para finalmente diagnosticar a meningite.A recuperação Foi durante esses momentos de adversidade que testemunhei a incrível resiliência do corpo, a dedicação incansável dos profissionais de saúde e a fé dos que estavam ao meu redor também foram fortalecidas, 
                A superação dessa provação não apenas fortaleceu minha apreciação pela vida, como aumentou minha gratidão pela oportunidade de continuar minha jornada. Esse episódio desafiador por um milagre nao me deixou sequelas ou cicatrizes físicas, porém forjou em mim um respeito enorme pela área da sáude e me deu uma nova visão de mundo.'/> 
          
                <CardProfissional 
                titulo={'Mais Sobre' } 
                conteudo={
                  <>Conteudo no slide:<br/><br/>
                    &copy; Monitor voluntário - Feira de procura de empregos pela Faculdade,<br />
                    &copy; Monitor voluntário aplicação PASS-UEM-2022,<br />
                    &copy; Apresentando banner sobre Feminicídio caso MAGO, trabalho exposto no terminal de Maringá<br/>
                    &copy; Estudos complementares de React

                  </>
    
                }
                main='"Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana."'/>
                  <Carrousel />
                </div>      
            </div>  
  )  
}

export default SobreMim
