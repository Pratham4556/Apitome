import React from 'react'
import styles from "../styles/main.module.css"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ContentPanel from '../components/ContentPanel'


export default function Home() {
  return (
    <div className={styles.main}>
        <Header />
        <div className={styles.child}>
          <Sidebar />
          <ContentPanel />
        </div>
    </div>
  )
}
