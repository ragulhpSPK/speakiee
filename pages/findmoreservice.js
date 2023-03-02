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
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.frontend_secondpage}>
        <div className={styles.frontend_second_img}>
          <Image
            src="/assets/images/front.png"
            alt="no image to display"
            width={300}
            height={300}
            className={styles.img}
          />
        </div>

        <div className={styles.frontend_secondpage_content}>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content2;
            })}
          </p>
        </div>
      </div>

      <div className={styles.frontend_thirdpage}>
        <div className={styles.frontend_second_img} id={styles.thirdimg}>
          <Image
            src="/assets/images/front.png"
            alt="no image to display"
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
        <div
          className={styles.frontend_secondpage_content}
          id={styles.thirdcontent}
        >
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content3;
            })}
          </p>
        </div>
      </div>

      <div className={styles.frontend_thirdpage}>
        <div className={styles.frontend_second_img} id={styles.fourimg}>
          <Image
            src="/assets/images/front.png"
            alt="no image to display"
            width={300}
            height={100}
            className={styles.img}
          />
        </div>

        <div
          className={styles.frontend_secondpage_content}
          id={styles.fourcontent}
        >
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content4;
            })}
          </p>
        </div>
      </div>


      <div className={styles.second_containr}>
        <div className={styles.secondcon_firstcontent}>
          <div>
            <Image
              src="/assets/images/content.png"
              width={300}
              height={400}
              alt="no image to display"
            />
          </div>
          <div>
            <h1>
              {Findmorecontentpage.map((res) => {
                return res.Heading5;
              })}
            </h1>
            <p>
              {" "}
              {Findmorecontentpage.map((res) => {
                return res.content5;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
