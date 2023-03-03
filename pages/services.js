import React from "react";
import styles from "../styles/services.module.css";
import Image from "next/image";
import { Servicecontentpage } from "@/helper/contentPage";
import Link from "next/link";

function Services() {
  return (
    <div className={styles.container}>
      <h1>
        {Servicecontentpage.map((res) => {
          return res.Heading1;
        })}
      </h1>
      <div className={styles.firststyle}>
        <div className={styles.firststylecontent}>
          <h1>
            {Servicecontentpage.map((res) => {
              return res.Heading2;
            })}
          </h1>
          <p>
            {Servicecontentpage.map((res) => {
              return res.content2;
            })}
          </p>
          <p className={styles.findmore}>
            {Servicecontentpage.map((res) => {
              return res.findmore;
            })}
            <br />
            <a href="/findmoreservice">frontend developer</a>
          </p>
        </div>
        <span className={styles.firststyleborder}></span>
        <div className={styles.firststyleimage}>
          <br />
          <Image
            src="/assets/images/translation.png"
            width={200}
            height={200}
            alt="no image found"
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.secondstyle}>
        <div className={styles.secondstyleimage}>
          <Image
            src="/assets/images/transcretion.png"
            width={200}
            height={200}
            alt="no image found"
            className={styles.img}
          />
        </div>
        <span className={styles.secondstyleborder}></span>
        <div className={styles.secondstylecontent}>
          <h1>
            {Servicecontentpage.map((res) => {
              return res.Heading3;
            })}
          </h1>
          <p>
            {Servicecontentpage.map((res) => {
              return res.content3;
            })}
          </p>
          <p className={styles.findmore}>
            {Servicecontentpage.map((res) => {
              return res.findmore;
            })}
            <br />
            <Link href="findmoreservice/#backend">Backend Developer</Link>
          </p>
        </div>
      </div>

      <div className={styles.firststyle}>
        <div className={styles.firststylecontent}>
          <h1>
            {Servicecontentpage.map((res) => {
              return res.Heading4;
            })}
          </h1>
          <p>
            {Servicecontentpage.map((res) => {
              return res.content4;
            })}
          </p>
          <p className={styles.findmore}>
            {Servicecontentpage.map((res) => {
              return res.findmore4;
            })}
            <br />
            <a>Content - Copywriting Services</a>
          </p>
        </div>
        <span className={styles.firststyleborder}></span>
        <div className={styles.firststyleimage}>
          <Image
            src="/assets/images/copy.png"
            width={200}
            height={200}
            alt="no image found"
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.secondstyle}>
        <div className={styles.secondstyleimage}>
          <Image
            src="/assets/images/cultural.png"
            width={200}
            height={200}
            alt="no image found"
            className={styles.img}
          />
        </div>
        <span className={styles.secondstyleborder}></span>
        <div className={styles.secondstylecontent}>
          <h1>
            {Servicecontentpage.map((res) => {
              return res.Heading5;
            })}
          </h1>
          <p>
            {" "}
            {Servicecontentpage.map((res) => {
              return res.content5;
            })}
          </p>
          <p className={styles.findmore}>
            {Servicecontentpage.map((res) => {
              return res.findmore;
            })}
            <br />
            <a href="#">Cultural Consultancy Services</a>
          </p>
        </div>
      </div>

      <div className={styles.firststyle}>
        <div className={styles.firststylecontent}>
          <h1>
            {" "}
            {Servicecontentpage.map((res) => {
              return res.Heading6;
            })}
          </h1>
          <p>
            {Servicecontentpage.map((res) => {
              return res.content6;
            })}
          </p>
          <p className={styles.findmore}>
            {Servicecontentpage.map((res) => {
              return res.findmore;
            })}
            <br />
            <a>Content Production Services</a>
          </p>
        </div>
        <span className={styles.firststyleborder}></span>
        <div className={styles.firststyleimage}>
          <Image
            src="/assets/images/content.png"
            width={200}
            height={200}
            alt="no image found"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
