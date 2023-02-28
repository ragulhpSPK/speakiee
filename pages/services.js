import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'

function Services() {
    return (
        <div className={styles.container}>
            <h1>Services</h1>
            <div className={styles.firststyle}>
                <div className={styles.firststylecontent}>
                    <h1>Translation Services</h1>
                    <p>A better way to engage your domestic & global
                        customers starts with a better translation process</p>
                    <p>
                        Find out more about our
                        <a>Translation Services</a>
                    </p>
                </div>
                <span className={styles.firststyleborder}></span>
                <div className={styles.firststyleimage}>
                    <Image src='/assets/images/translation.png' width={400} height={400} alt='no image found' />
                </div>
            </div>



            <div className={styles.secondstyle}>
                <div className={styles.secondstyleimage}>
                    <Image src='/assets/images/transcretion.png' width={400} height={400} alt='no image found' />
                </div>
                <span className={styles.secondstyleborder}></span>
                <div className={styles.secondstylecontent}>
                    <h1>Transcreation Services</h1>
                    <p>Content adaptation from one language to another while maintaining its style, intent, context and tone</p>
                    <p>
                        Find out more about our
                        <a>Transcreation Services</a>
                    </p>
                </div>
            </div>


            <div className={styles.firststyle}>
                <div className={styles.firststylecontent}>
                    <h1>Content-
                        Copywriting Services</h1>
                    <p>Copywriting services in various languages</p>
                    <p>
                        Find out more about our
                        <a>Content - Copywriting Services</a>
                    </p>
                </div>
                <span className={styles.firststyleborder}></span>
                <div className={styles.firststyleimage}>
                    <Image src='/assets/images/copy.png' width={400} height={400} alt='no image found' />
                </div>
            </div>


            <div className={styles.secondstyle}>
                <div className={styles.secondstyleimage}>
                    <Image src='/assets/images/cultural.png' width={300} height={300} alt='no image found' />
                </div>
                <span className={styles.secondstyleborder}></span>
                <div className={styles.secondstylecontent}>
                    <h1>Cultural
                        Consultancy Services</h1>
                    <p>Culture: An unspoken yet a powerful force/tool</p>
                    <p>
                        Find out more about our
                        <a>Cultural Consultancy Services</a>
                    </p>
                </div>
            </div>


            <div className={styles.firststyle}>

                <div className={styles.firststylecontent}> 
                    <h1>Content Production Services</h1>
                    <p>Content production services viz. Subtitling, Captioning,
                        Video editing, VO services</p>
                    <p>
                        Find out more about our
                        <a>Content Production Services</a>
                    </p>
                </div>
                <span  className={styles.firststyleborder}></span>
                <div className={styles.firststyleimage}>
                    <Image src='/assets/images/content.png' width={400} height={400} alt='no image found' />
                </div>


            </div>

        </div>
    )
}

export default Services