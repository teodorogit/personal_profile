import React from 'react'
import styles from './CardProfissional.module.css'
const CardProfissional = ({titulo,conteudo,dado,img,img1,img2,img3,img4,main}) => {
  return (
    <div className={styles.card_component}>
        <h2>{titulo}</h2>
        <p>{conteudo}</p>
        <p>{dado}</p>
        <div className='imgs'>
          <img src={img} alt={titulo} />
          <img src={img1} alt={titulo} />
          <img src={img2} alt={titulo} />
          <img src={img3} alt={titulo} />
          <img src={img4} alt={titulo} />
        </div>

        <h3>{main}</h3>
      
    </div>
  )
}

export default CardProfissional
