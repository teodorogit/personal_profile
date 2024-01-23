import React from 'react'
import Profissional from './Profissional'
import Pessoal from './Pessoal'
import SobreMim from './SobreMim'
import Portfolio from './Portfolio'


function Main() {
  return (
    <div>
      <Portfolio/>
        <Profissional/>
        <Pessoal/>
        <SobreMim/>               
    </div>
  )
}

export default Main
