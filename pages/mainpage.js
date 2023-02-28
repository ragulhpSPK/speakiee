import React from 'react'
import { Mainpagecontent } from './contentPage'
import Image from 'next/image'
import styles from '../styles/mainpage.module.css'

function Mainpage() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <p>{Mainpagecontent.map(data => { return data.content}) }</p>
        <Image src='/assets/images/worldweb.png' height={400} width={700} alt="no image"/>
        </div>
    </div>
  )
  
}

export default Mainpage