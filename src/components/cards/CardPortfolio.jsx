import React from 'react'
import styles from './CardPortfolio.module.css'
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbDeviceDesktop } from "react-icons/tb";


const CardPortfolio = ({titulo,description,imageUrl,link,tag, customClassName}) => {
  const containerClassName = customClassName ? `${styles.container_card} ${customClassName}` : styles.container_card;
  return (
    <div className={containerClassName}>
        <img src={imageUrl} alt={titulo} className={styles.imagem_card}></img>
        <h2 className={styles.titulo_card}><IoCodeSlashOutline size={'25px'} color='#55BFD2 '/> {titulo}</h2>
        <p className={styles.descricao_card}>{description}</p>
        <a className={styles.button_class}href={link}target='_blank' rel='noopener noreferrer'> + Detalhes</a>
      
    </div>
  )
}

export default CardPortfolio