import React from 'react'
import Image from 'next/image'
import styles from '../styles/contact.module.css'
import Basicschema from './validation'
import { Formik, useFormik } from 'formik'

function Contact() {

    const onSubmit = () => {
        alert('your details submitted');
    }

    const { handleChange, values, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: "",
            name: '',
            number: "",
            message: ''
        },
        validationSchema: Basicschema,
        onSubmit,
    })



    return (
        <div id='contact' className={styles.container}>
            <div className={styles.image}>
                <Image src='/assets/images/contact.png' height={800} width={800} alt='no image found' />
            </div>
            <div className={styles.contact}>
                <form className={styles.formcontroler} onSubmit={handleSubmit}>
                    <label for='email'>Email</label>
                    <input type='email' value={values.email} id='email' placeholder='Enter Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p>{errors.email}</p>}

                    <label for='name'>Email</label>
                    <input type='text' id='name' placeholder='Enter Name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name && <p>{errors.name}</p>}

                    <label for='number'>Number</label>
                    <input type='number' id='number' placeholder='Enter Phone Number'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                     {errors.number && touched.number && <p>{errors.number}</p>}


                    <label for='message'>Message</label>
                    <textarea rows="4" id='message' cols="50" placeholder='Message'

                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && touched.message && <p>{errors.message}</p>}
                    <button className={styles.btn}>Submit</button>
                    {!errors ? <div>submitted</div> : ""}


                </form>
            </div>
            <h1>We are presented in</h1>
            <div className={styles.image}>

                <Image src='/assets/images/map.png' height={800} width={800} alt='no image found' />
            </div>
        </div>
    )
}

export default Contact