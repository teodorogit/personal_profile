import React from 'react'
import styles from './CardHobbie.module.css'

const CardHobbie = ({content,url}) => {
  return (
    <div className={styles.card_component}>
        <p>{content}</p>
        <a href={url} target='_blank'></a>
      
    </div>
  )
}

export default CardHobbie
