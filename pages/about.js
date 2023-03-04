import React from "react";
import Image from "next/image";
import { Aboutpagecontent } from "@/helper/contentPage";
import styles from "../styles/about.module.css";

export default function about() {
  return (
    <div className={styles.container}>
      <h1 class="animate__animated animate__flipInY animate__slow	2s">
        {Aboutpagecontent.map((res) => {
          return res.Heading1;
        })}
      </h1>
      <div className={styles.first_content}>
        <Image
          src="/assets/images/about.png"
          alt="no image found"
          height={400}
          width={800}
          class="animate__animated animate__flipInY animate__slow	2s" 
        />
        <p>
          {Aboutpagecontent.map((res) => {
            return res.content1;
          })}
        </p>
      </div>

      <div className={styles.second_content}>
        <div className={styles.second_content_heading}>
          <h1>
            {Aboutpagecontent.map((res) => {
              return res.Heading2;
            })}
          </h1>
        </div>
        <span className={styles.border}></span>
        <div className={styles.second_content_info}>
          <p>
            {Aboutpagecontent.map((res) => {
              return res.content2;
            })}
          </p>
        </div>
      </div>

      <div className={styles.third_content}>
        <div className={styles.third_content_first}>
          <h1>
            {Aboutpagecontent.map((res) => {
              return res.Heading3;
            })}
          </h1>
          <p>
            {Aboutpagecontent.map((res) => {
              return res.content3;
            })}
          </p>
        </div>
        <div className={styles.third_content_second}>
          <p>
            {Aboutpagecontent.map((res) => {
              return res.content3;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
