import React from 'react'
import site_cadeiras from '../assets/site-cadeiras.png'
import bot_discord from '../assets/bot-discord.jpg'
import logo_ominifood from '../assets/omnifood.jpg'
import todo_react from '../assets/todo-react.jpg'
import tela_pagamento from '../assets/tela-pagamento.jpg'
import tela_cadastro from '../assets/tela-cadastro.jpg'
import tela_quiz from '../assets/quiz-imagem.jpg'
import gerenciador_gastos from '../assets/gerenciador_gastos.jpg'
import coast from '../assets/coast.jpg'
import './Portfolio.css'
import CardPortfolio from './cards/CardPortfolio'
import { IoSearch } from "react-icons/io5";


const Portfolio = () => {
  


  return (
    <div className='section-portfolio'>
      <div className='container'>

            <h3 className='titulo_separador'>PrincipaisProjetos</h3>
            <div className='input_element'>
             </div>
            <h3 className='titulo_separador'>Projetos React</h3>
{/* PROJETOS COM REACT */}
            <div className='grid_div'>
                <CardPortfolio
                className='cards'
                imageUrl={todo_react}
                titulo='todo-react'
                description='Aplicação para criação e exclusão de tarefas, escolha de ordem de exibição e pesquisa por nome'
                link="https://todo-list-react-smoky-alpha.vercel.app/"
            
                />
                <CardPortfolio
                imageUrl={gerenciador_gastos}
                titulo='Controle de finanças'
                description='Programa que permite a criação de um gasto, onde é definido uma data e um valor, é possivel realizar uma filtragem por ano e visualizar de forma geral por gráfico dinâmico'  
                link="https://app-gerenciador-gastos.vercel.app/"
                />
                <CardPortfolio
                imageUrl={coast}
                titulo='Gerenciador de projetos'
                description='Programa que permite a criação de um gasto, onde é definido uma data e um valor, é possivel realizar uma filtragem por ano e visualizar de forma geral por gráfico dinâmico'  
                link="https://github.com/teodorogit/coasts"
                />
                {/* ************* */}

            </div>
                <h3 className='titulo_separador'>Projetos responsivos</h3>
            <div className='grid_div'>

                <CardPortfolio
                imageUrl={logo_ominifood}
                titulo='Restaurante Ominifood'
                description='Site que apresenta principais pratos, galeria de imagens, testemunho e marcas parceiras, com responsividade'
                link="https://omnifood-restaurante.vercel.app/"
               
                />
                <CardPortfolio
                imageUrl={tela_quiz}
                titulo='Quiz de perguntas'
                description='Quiz de perguntas com pontuação de erros e acertos, randonização de perguntas e exibição de respostas certa ou erradas'
                link="https://quiz-perguntas-javascript.vercel.app/"
                />
            </div>
            <h3 className='titulo_separador'>Projetos apenas desktop</h3>
            <div className='grid_div'>
                <CardPortfolio
                imageUrl={bot_discord}
                titulo='Web page Bot para Discord'
                description='Site que apresenta um bot para discord e suas funcionalidades, sem responsividade.'
                link="https://landing-page-bot-discord.vercel.app/"
                />
                 <CardPortfolio
                imageUrl={site_cadeiras}
                titulo='Site venda de cadeiras'
                description='Perfil virtual de uma loja de venda de cadeiras, não responsivo para mobile.'
                link="https://site-de-venda-cadeiras.vercel.app/"
                />  
            </div>

            <h3 className='titulo_separador'>Projetos na Faculdade</h3>
            <div className='grid_div'>
                <CardPortfolio
                    imageUrl={tela_pagamento}
                    titulo='Sistema: Smart Estaciona'
                    description='Sistema de controle de estacionamento, desenvolvido na faculdade, com funcionalidade de registrar cliente novo, salvar cadastro em banco, calcular valor á pagar baseado em horas, pagamento e atualização de vagas disponiveis automático. '
                    link="https://github.com/xPLACEBOx/EstacionamentoERP/tree/main"
                    />  
                <CardPortfolio
                    imageUrl={tela_cadastro}
                    titulo='Sistema: Smart Estaciona'
                    description='Além do controle de estacionamento, é possivel visulizar vagas ocupadas e disponiveis, e os numeros atualizam automaticamente quando um cliente finaliza o pagamento do serviço, linguagem base do sistema:Java'
                    link="https://github.com/xPLACEBOx/EstacionamentoERP/tree/main"
                    />  
            </div>
           
            </div>
</div>
  )
}

export default Portfolio
