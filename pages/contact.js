import React from "react";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import Basicschema from "../helper/validation";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [data, setData] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        number: "",
        message: "",
      },
      validationSchema: Basicschema,
      onSubmit: async () => {
        const formData = {
          email: values.email,
          name: values.name,
          number: values.number,
          message: values.message,
        };
        axios.post("/api/mailer", formData).then((res) => {
          console.log("Response received");
          if (res.status === 200) {
            console.log("Response succeeded!");
            setSubmitted(true);
            setData("");
          }
          if (res.status === 404) console.log("error");
        });
      },
    });

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/assets/images/contact.png"
          class="animate__animated animate__fadeIn animate__slow	3s"
          height={800}
          width={800}
          alt="no image found"
        />
      </div>
      <div className={styles.contact}>
        <form className={styles.formcontroler} onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            type="email"
            value={values.email}
            id="email"
            placeholder="Enter Email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}

          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}

          <label for="number">Number</label>
          <input
            type="number"
            id="number"
            placeholder="Enter Phone Number"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.number && touched.number && <p>{errors.number}</p>}

          <label for="message">Message</label>
          <textarea
            rows="4"
            id="message"
            cols="50"
            placeholder="Message"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message && <p>{errors.message}</p>}
          <button className={styles.btn} type="submit">
            Submit
          </button>
          {!errors ? <div>submitted</div> : ""}
        </form>
      </div>
      <h1>We are presented in</h1>
      <div className={styles.image}>
        <Image
          src="/assets/images/map.png"
          height={800}
          width={800}
          alt="no image found"
        />
      </div>
    </div>
  );
}

export default Contact;
