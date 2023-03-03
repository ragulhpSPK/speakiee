import React from 'react'
import styles from "../styles/product.module.css";
import Image from "next/image";

function product() {
  return (
    <>
<div className={styles.cardBackground}>
    <div className={styles.card}>

        <div className={styles.row1}>
        <div className={styles.card1}>

            <div className={styles.innerbody}>

            <h3>BizTalk360</h3>
            <p  className={styles.secoundLine}>More Content</p>
            
            <p className={styles.thirdLine}> Server operations, monitoring and analytics software.

Serverless360</p>


 <Image className={styles.img}          src="/assets/images/arrow1.png"
          height={25}
          width={30}
          alt="no image found"
        />

            </div>




        </div>
        <div className={styles.card1}>
        <div className={styles.innerbody}>

<h3>Churn360</h3>
<p  className={styles.secoundLine}>More Content</p>

<p className={styles.thirdLine}> Server operations, monitoring and analytics software.

Serverless360</p>


<Image className={styles.img}          src="/assets/images/arrow1.png"
height={25}
width={30}
alt="no image found"
/>

</div>
        </div>
        </div>
      

       <div className={styles.row2}>
    <div className={styles.card2}>
    <div className={styles.innerbody}>

<h3>Document360</h3>
<p  className={styles.secoundLine}>More Content</p>

<p className={styles.thirdLine}> Server operations, monitoring and analytics software.

Serverless360</p>


<Image className={styles.img}          src="/assets/images/arrow1.png"
height={25}
width={30}
alt="no image found"
/>

</div>
    </div>
        <div className={styles.card2}>
        <div className={styles.innerbody}>

<h3>Serverless360</h3>
<p  className={styles.secoundLine}>More Content</p>

<p className={styles.thirdLine}> Server operations, monitoring and analytics software.

Serverless360</p>


<Image className={styles.img}          src="/assets/images/arrow1.png"
height={25}
width={30}
alt="no image found"
/>

</div>
        </div>
       
    </div>
    </div>
    </div>
    </>
  )
}

export default product
