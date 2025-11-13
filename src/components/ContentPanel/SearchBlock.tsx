import React from 'react'
import styles from "../../styles/ContentPanel/SearchBlock.module.css"
interface SearchProps{
    name:string
    placeHolder:string
}
export default function SearchBlock({name,placeHolder}:SearchProps) {
  return (
    <div className={styles.main}>
        <div className={styles.mainHead}>{name}</div>
        <div className={styles.MainSearchBox}>
            <input placeholder={placeHolder} className={styles.MainSearchBoxInputArea}/>
            <div className={styles.MainSearchBoxButton}>Search</div>
        </div>
    </div>
  )
}
