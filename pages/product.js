import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";
import { ProductpageContent } from "@/helper/contentPage";

function product() {
  return (
    <>
      <div className={styles.cardBackground}>
        <div className={styles.card}>
          <div className={styles.row1}>
            <div className={styles.card1}>
              <div className={styles.innerbody}>
                <h3>
                  {" "}
                  {ProductpageContent.map((res) => {
                    return res.Heading1;
                  })}
                </h3>
                <p className={styles.secoundLine}>
                  {ProductpageContent.map((res) => {
                    return res.subHeading1;
                  })}
                </p>

                <p className={styles.thirdLine}>
                  {ProductpageContent.map((res) => {
                    return res.content1;
                  })}{" "}
                </p>

                <Image
                  className={styles.img}
                  src="/assets/images/arrow1.png"
                  height={25}
                  width={30}
                  alt="no image found"
                />
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.innerbody}>
                <h3>
                  {ProductpageContent.map((res) => {
                    return res.Heading2;
                  })}
                </h3>
                <p className={styles.secoundLine}>
                  {ProductpageContent.map((res) => {
                    return res.subHeading2;
                  })}
                </p>

                <p className={styles.thirdLine}>
                  {" "}
                  {ProductpageContent.map((res) => {
                    return res.content2;
                  })}
                </p>

                <Image
                  className={styles.img}
                  src="/assets/images/arrow1.png"
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
                <h3>
                  {ProductpageContent.map((res) => {
                    return res.Heading3;
                  })}
                </h3>
                <p className={styles.secoundLine}>
                  {ProductpageContent.map((res) => {
                    return res.subHeading3;
                  })}
                </p>

                <p className={styles.thirdLine}>
                  {ProductpageContent.map((res) => {
                    return res.content3;
                  })}
                </p>

                <Image
                  className={styles.img}
                  src="/assets/images/arrow1.png"
                  height={25}
                  width={30}
                  alt="no image found"
                />
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.innerbody}>
                <h3>
                  {ProductpageContent.map((res) => {
                    return res.Heading4;
                  })}
                </h3>
                <p className={styles.secoundLine}>
                  {ProductpageContent.map((res) => {
                    return res.subHeading4;
                  })}
                </p>

                <p className={styles.thirdLine}>
                  {ProductpageContent.map((res) => {
                    return res.content4;
                  })}
                </p>

                <Image
                  className={styles.img}
                  src="/assets/images/arrow1.png"
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
  );
}

export default product;
