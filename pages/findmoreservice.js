import React from "react";
import { Findmorecontentpage } from "@/helper/contentPage";
import Image from "next/image";
import styles from "../styles/findmoreservice.module.css";

function Frontend() {
  return (
    <div className={styles.frontend_container}>
      <div className={styles.frontend_firstpage}>
        <div className={styles.frontend_firstpage_content}>
          <h1>
            {Findmorecontentpage.map((res) => {
              return res.Heading1;
            })}
          </h1>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content1;
            })}
          </p>
        </div>
        <span className={styles.border}></span>
        <div className={styles.frontend_firstpage_img}>
          <Image
            src="/assets/images/frontend.jpg"
            alt="no image to display"
            width={500}
            height={400}
          />
        </div>
      </div>

      <div className={styles.frontend_secondpage}>
        <div className={styles.frontend_second_img}>
          <Image
            src="/assets/images/front.png"
            alt="no image to display"
            width={300}
            height={100}
          />
        </div>

        <div className={styles.frontend_secondpage_content}>
          <h1>
            {Findmorecontentpage.map((res) => {
              return res.Heading1;
            })}
          </h1>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content1;
            })}
          </p>
        </div>
      </div>

      <div className={styles.frontend_thirdpage}>
        <div
          className={styles.frontend_secondpage_content}
          id={styles.thirdcontent}
        >
          <h1>
            {Findmorecontentpage.map((res) => {
              return res.Heading1;
            })}
          </h1>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content1;
            })}
          </p>
        </div>
        <div className={styles.frontend_second_img} id={styles.thirdimg}>
          <Image
            src="/assets/images/front.png"
            alt="no image to display"
            width={300}
            height={100}
          />
        </div>
      </div>

      <div className={styles.frontend_thirdpage}>
        <div className={styles.frontend_second_img} id={styles.fourimg}>
          <Image
            src="/assets/images/front.png"
            alt="no image to display"
            width={300}
            height={100}
          />
        </div>

        <div
          className={styles.frontend_secondpage_content}
          id={styles.fourcontent}
        >
          <h1>
            {Findmorecontentpage.map((res) => {
              return res.Heading1;
            })}
          </h1>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content1;
            })}
          </p>
        </div>
      </div>

      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Frontend;
