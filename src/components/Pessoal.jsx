import React from 'react'
import violao from '../assets/violao.svg'
import './Pessoal.css'

function Pessoal() {
  return (
    <div class="descricao-pessoal">
         <div className='card-pessoal'>
          <img className='picture' src={violao} alt="" />
        </div>
        <h3 className='titulo'>Características pessoais</h3>
            <div className='card-grid'>
                <div class="card ">
                    <p>Sou músico, leitor, escritor</p>
                    <p>violinista, tecladista</p>
                    <p> e Falo básico de russo</p>
                </div>
                <div class="card ">
                    <p>Escrevendo: livro de Suspense: Oque aconteceu na mansão SINA</p><br></br>
                    <p>Pré-projeto ciéntifico: </p>
                    <p>"Exaustão  mental na área da tecnologia"</p>
                </div>
             </div>

    </div>
  )
}

export default Pessoal
