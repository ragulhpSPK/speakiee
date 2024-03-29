import React from "react";
import { Mainpagecontent } from "../helper/contentPage";
import Image from "next/image";
import styles from "../styles/mainpage.module.css";

function Mainpage() {
  return (
    <div className={styles.container} id="mainpage">
      <div className={styles.content}>
        <p>
          {Mainpagecontent.map((data) => {
            return data.content;
          })}
        </p>
        <Image
          src="/assets/images/dummy2.png"
          height={900}
          width={1300}
          alt="no image"
          className="animate__animated animate__bounceIn  animate__slow	1s"
          id={styles.img}
        />
      </div>
    </div>
  );
}

export default Mainpage;
