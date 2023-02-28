import React from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Navbar() {



    return (
        // <div className={styles.container}>
        //     <div className={styles.logonav}>
        //         <div className={styles.logo}>
        //             <Image src='/assets/images/speakiee orange.png'
        //                 width={200}
        //                 height={100}
        //                 alt="Logo of speakiee"
        //             />
        //         </div>
        //         <div className={styles.navbar}>
        //             <a href='#'>About us</a>
        //             <a href='#' className={styles.servi}>Services</a>
        //             <a href='#'>Clients</a>
        //             <a href='#'>join Us / careers</a>
        //             <a href='#'>Our Block</a>
        //             <a href='#'>Partners</a>
        //             <a href='#'>Contact</a>
        //         </div>

        //     </div>
        //     <div className={styles.hovernav}>
        //         <ul>
        //             <li>Translation</li>
        //             <span>|</span>
        //             <li>Transcretion</li>
        //             <span>|</span>
        //             <li>content_copywriting</li>
        //             <span>|</span>
        //             <li>Cultural consultancy</li>
        //             <span>|</span>
        //             <li>content production</li>
        //         </ul>
        //     </div>
        // </div>
        <div className={styles.container}>
            <div className="navbar bg-base-100 h-40" data-theme="retro">
        <div className="navbar-start">
        <Image src='/assets/images/speakiee orange.png' height={200} width={250} alt='img not found' className={styles.img}/>
        </div>
        <div className="navbar-middle" id={styles.middle}>
          <ul className="menu menu-horizontal px-1">
            <li><a>About us</a></li>
            <li tabIndex={0}>
              <a>Services
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Translation</a></li>
                <li><a>Transcretion</a></li>
                <li><a>content_copywriting</a></li>
                <li><a>Cultural consultancy</a></li>
                <li><a>content production</a></li>
              </ul>
            </li>
            <li><a>Clients</a></li>
            <li><a>join Us / careers</a></li>
            <li><a>Our Block</a></li>
            <li><a>Partners</a></li>
            <li><a href='contact'>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div></div>
    )
}

export default Navbar
