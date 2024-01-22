import React from 'react'
import './Pessoal.css'
import CardHobbie from './cards/CardHobbie'

function Pessoal() {
  return (
    <div class="descricao-pessoal">
        <h3 className='titulo'>Características pessoais</h3>
            <div className='content'>
                <a href="" target='_blank' className='links'>
                  <CardHobbie
                  content='Sou musico, Leitor e escritor' />
                </a>
                <a href='https://www.facebook.com/100005651013733/videos/367479812447179' target='_blank' className='links'>
                <CardHobbie
                 content='Tecladista e Violinista' />  </a>
                <CardHobbie
                content='Falo ingles B2 e russo básico' />           
                <CardHobbie
                content='Escrevendo: livro de Suspense: Oque aconteceu na mansão SINA' />
                <CardHobbie
                content='Pré-projeto ciéntifico: Exaustão  mental na área da tecnologia ' />
              </div>
    </div>
  )
}

export default Pessoal
