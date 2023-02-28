import React,{useEffect} from 'react'
import styles from '../styles/infopage.module.css'
import Image from 'next/image';
function Infopage() {
    const fetchData=async ()=>{
     const response =await fetch("./api/hello");
     const data = await response.json()
     console.log(data)     
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className={styles.container}>
            <div className={styles.firstpageinfo}>
                <div className={styles.heading}>
                    <h1>speakiee Corporations</h1>
                </div>
                <div className={styles.border}>
                    <span>   </span>
                </div>
                <div className={styles.active}>
                    <p>Active for over</p>
                    <span>6+</span>
                    <p>Years</p>
                </div>
                <div className={styles.service}>
                    <p>Servicing in</p>
                    <span>23</span>
                    <p>Indic Languages</p>
                </div>
                <div className={styles.team}>
                    <p>Team</p>
                    <span>1500+</span>
                    <p>Language experts</p>
                </div>
            </div>

            <div className={styles.secondpageinfoheading}>
                <h1>India today has</h1>
            </div>

            <div className={styles.secondpageinfo}>
                <div className={styles.secondpagecon}>
                    <Image src='/assets/images/laptop.png' width={300} height={300} />
                    <span>2nd Largest </span>
                    <p>Internet userbase in the world</p>
                </div>
                <span className={styles.secondborder}></span>
                <div className={styles.secondpagecon}>
                    <Image src='/assets/images/mobile.png' width={300} height={300} />
                    <span>80%</span>
                    <p>Active mobile
                        internet users</p>
                </div>
                <span className={styles.secondborder}></span>
                <div className={styles.secondpagecon}>
                    <Image src='/assets/images/languages.png' width={200} height={0} />
                    <span>22 </span>
                    <p>Official
                        languages</p>
                </div>
            </div>

            <div className={styles.thirdpageinfo}>
                <div className={styles.thirdpagecon}>
                    <p>Tap into a
                        userbase of
                        boundless potential</p>
                </div>

                <div className={styles.thirdpageseccon}>
                    <span>9/10</span>
                    <p>Internet users will be
                        native language users, with rural India leading the way in
                        digital adoption.</p>
                </div>
            </div>
        </div>
    )
}


export default Infopage;