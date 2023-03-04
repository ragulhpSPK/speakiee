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

        <div className={styles.frontend_secondpage_content} id={styles.content}>
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

      <div className={styles.second_container} id="backend">
        <div className={styles.secondcon_firstcontent}>
          <div className={styles.second_con_img}>
            <Image
              src="/assets/images/content.png"
              width={400}
              height={400}
              alt="no image to display"
            />
          </div>
          <span className={styles.border}></span>
          <div className={styles.secondcon_para}>
            <h1>
              {Findmorecontentpage.map((res) => {
                return res.Heading5;
              })}
            </h1>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content5;
              })}
            </p>
          </div>
        </div>

        <div className={styles.secondcon_secondContent}>
          <div className={styles.secondcontainer_img}>
            <div className={styles.secondcon_img1}>
              <Image
                src="/assets/images/front.png"
                alt="no image to display"
                width={300}
                height={400}
              />
            </div>

            <div className={styles.secondcon_img2}>
              <Image
                src="/assets/images/front.png"
                alt="no image to display"
                width={300}
                height={400}
              />
            </div>

            <div className={styles.secondcon_img3}>
              <Image
                src="/assets/images/front.png"
                alt="no image to display"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondcon_thirdcontent}>
        <div className={styles.secondcon_thirdcontent_para1}>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content6;
            })}
          </p>
        </div>

        <div className={styles.secondcon_thirdcontent_para2}>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content7;
            })}
          </p>
        </div>

        <div className={styles.secondcon_thirdcontent_para3}>
          <p>
            {Findmorecontentpage.map((res) => {
              return res.content8;
            })}
          </p>
        </div>
      </div>

      <div className={styles.third_container} id='thirdcontainer'>
        <div className={styles.third_container_firstpage}>
          <div className={styles.third_container_para}>
            <h1>
              {Findmorecontentpage.map((res) => {
                return res.Heading9;
              })}
            </h1>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content9;
              })}
            </p>
          </div>
          <span className={styles.border} />
          <div className={styles.third_container_img}>
            <Image
              src="/assets/images/frontend.jpg"
              alt="no Image to display"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className={styles.third_container_secondpage}>
          <div className={styles.third_container_secondpage_para1}>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content10;
              })}
            </p>
          </div>
          <div className={styles.third_container_secondpage_para2}>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content11;
              })}
            </p>
          </div>
          <div className={styles.third_container_secondpage_para3}>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content12;
              })}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.fourth_container} id='fourthcontainer'>
        <div className={styles.fourcon_content}>
          <div className={styles.fourcon_content_para1}>
            <div className={styles.para1_img1}>
              <Image
                src="/assets/images/pngegg.png"
                width={150}
                height={200}
                alt="no image to display"
              />
            </div>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content13;
              })}
            </p>
          </div>
          <div className={styles.fourcon_content_para2}>
            <div className={styles.para1_img1}>
              <Image
                src="/assets/images/pngegg.png"
                width={150}
                height={200}
                alt="no image to display"
              />
            </div>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content14;
              })}
            </p>
          </div>
          <div className={styles.fourcon_content_para3}>
            <div className={styles.para2_img2}>
              <Image
                src="/assets/images/pngegg.png"
                width={150}
                height={200}
                alt="no image to display"
              />
            </div>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content15;
              })}
            </p>
          </div>
          <div className={styles.fourcon_content_para4}>
            <div className={styles.para2_img2}>
              <Image
                src="/assets/images/pngegg.png"
                width={150}
                height={200}
                alt="no image to display"
              />
            </div>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content16;
              })}
            </p>
          </div>
        </div>

        <div className={styles.fourcon_second_content}>
          <div className={styles.fourcon_second_content_para1}>
            <h1>
              {Findmorecontentpage.map((res) => {
                return res.Heading17;
              })}
            </h1>
            <p>
              {Findmorecontentpage.map((res) => {
                return res.content17;
              })}
            </p>
          </div>
          <div className={styles.fourcon_img}>
            <Image
              src="/assets/images/front.png"
              width={300}
              height={300}
              alt="no image to display"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
