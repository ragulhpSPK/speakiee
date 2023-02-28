import React from 'react'
import styles from '../styles/footer.module.css'
import { FacebookFilled,LinkedinFilled,InstagramFilled,YoutubeFilled,CaretRightFilled } from '@ant-design/icons'


 function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.service}>
                    <h1>Services</h1>
                    <ul>
                        <li><CaretRightFilled className={styles.arrow} />Translation</li>
                        <li><CaretRightFilled className={styles.arrow} />Transcretion</li>
                        <li><CaretRightFilled  className={styles.arrow}/>Content-copywriting</li>
                        <li><CaretRightFilled className={styles.arrow} />Cultural consultancy</li>
                        <li><CaretRightFilled className={styles.arrow} />Content production</li>
                    </ul>
                </div>

                <div className={styles.careers}>
                    <h1>Join us / careers</h1>
                    <ul>
                        <li><CaretRightFilled className={styles.arrow} />Working  @ Speakiee</li>
                        <li><CaretRightFilled className={styles.arrow} />Current openings</li>
                        <p>For career enquiries:</p>
                        <p>hr@speakiee@gmail.com</p>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h1>Contact</h1>
                    <ul>
                        <li><CaretRightFilled className={styles.arrow} />Our head Office</li>
                        <li><CaretRightFilled className={styles.arrow} />Connect with us</li>
                        <p>For business enquiries:</p>
                        <p>connect@speakieegroups@gmail.com</p>
                    </ul>
                </div>

                <div className={styles.headoffice}>
                    <h1>Head Office</h1>
                    <ul>
                        <li><CaretRightFilled className={styles.arrow} />Karur</li>
                        <li><CaretRightFilled className={styles.arrow} />vaiyapurinagar 4th cross</li>
                    </ul>
                </div>
                <div className={styles.located}>
                    <h1>We are also presented in</h1>
                    <ul>
                        <li><CaretRightFilled className={styles.arrow} />Karur</li>
                        <li></li>
                    </ul>
                </div>
            </div>
<div className={styles.icons}>
    <span><FacebookFilled /></span>
    <span><LinkedinFilled /></span>
    <span><InstagramFilled /></span>
    <span><YoutubeFilled /></span>
</div>
<div className={styles.copyrights}>
    <span>&#169;Speakiee Corporation all rights reserved</span>
    <p>Terms and Conditions | Privacy Policy | Sitemap</p>
</div>
        </div>
    )
}

export default Footer