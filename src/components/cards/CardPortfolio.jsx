import React from 'react'
import styles from './CardPortfolio.module.css'


const CardPortfolio = ({titulo,description,imageUrl,link,tag}) => {
  return (
    <div className={styles.container_card}>
      <div className={styles.container_img}>
        <img src={imageUrl} alt={titulo} className={styles.imagem_card}></img>
      </div>
      <div className={styles.text}>
        <h2 className={styles.titulo_card}>{titulo}</h2>
        <p className={styles.descricao_card}>{description}</p>
        <a className={styles.button_class}href={link}target='_blank' rel='noopener noreferrer'> + Detalhes</a>
        </div>
      
    </div>
  )
}

export default CardPortfolio
