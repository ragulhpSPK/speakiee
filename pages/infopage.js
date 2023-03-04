import styles from "../styles/infopage.module.css";
import Image from "next/image";
import { Infopagecontent } from "@/helper/contentPage";

function Infopage() {
  return (
    <div className={styles.container}>
      <div className={styles.firstpageinfo}>
        <div className={styles.heading}>
          <h1>
            {Infopagecontent.map((res) => {
              return res.Heading1;
            })}
          </h1>
        </div>
        <span className={styles.border}> </span>

        <div className={styles.active}>
          <p>
            {Infopagecontent.map((res) => {
              return res.content1;
            })}
          </p>
          <span>
            {Infopagecontent.map((res) => {
              return res.number1;
            })}
          </span>
          <p>
            {" "}
            {Infopagecontent.map((res) => {
              return res.year1;
            })}
          </p>
        </div>
        <div className={styles.service}>
          <p>
            {Infopagecontent.map((res) => {
              return res.content2;
            })}
          </p>
          <span>
            {Infopagecontent.map((res) => {
              return res.number2;
            })}
          </span>
          <p>
            {Infopagecontent.map((res) => {
              return res.languages2;
            })}
          </p>
        </div>
        <div className={styles.team}>
          <p>
            {Infopagecontent.map((res) => {


              return res.content3;
            })}
          </p>
          <span>
            {Infopagecontent.map((res) => {
              return res.number3;
            })}
          </span>
          <p>
            {Infopagecontent.map((res) => {
              return res.languages3;
            })}
          </p>
        </div>
      </div>

      <div className={styles.secondpageinfoheading}>
        <h1>
          {Infopagecontent.map((res) => {
            return res.Heading4;
          })}
        </h1>
      </div>

      <div className={styles.secondpageinfo}>
        <div className={styles.secondpagecon}>
          <Image
            src="/assets/images/laptop.png"
            width={300}
            height={300}
            id={styles.img}
          />
          <span>
            {Infopagecontent.map((res) => {
              return res.large4;
            })}
          </span>
          <p>
            {" "}
            {Infopagecontent.map((res) => {
              return res.content4;
            })}
          </p>
        </div>
        <span className={styles.secondborder}></span>
        <div className={styles.secondpagecon}>
          <Image
            src="/assets/images/mobile.png"
            width={300}
            height={300}
            id={styles.img}
            className="animate__animated animate__fadeIn  animate__slow	2s"
          />
          <span>
            {Infopagecontent.map((res) => {
              return res.percentage5;
            })}
          </span>
          <p>
            {" "}
            {Infopagecontent.map((res) => {
              return res.content5;
            })}
          </p>
        </div>
        <span className={styles.secondborder}></span>
        <div className={styles.secondpagecon}>
          <Image
            src="/assets/images/languages.png"
            width={200}
            height={0}
            id={styles.img}
            className="animate__animated animate__fadeIn  animate__slow	2s"
          />
          <span>
            {Infopagecontent.map((res) => {
              return res.language6;
            })}
          </span>
          <p>
            {" "}
            {Infopagecontent.map((res) => {
              return res.content6;
            })}
          </p>
        </div>
      </div>

      <div className={styles.thirdpageinfo}>
        <div className={styles.thirdpagecon}>
          <p>
            {Infopagecontent.map((res) => {
              return res.content7;
            })}
          </p>
        </div>

        <div className={styles.thirdpageseccon}>
          <span>
            {" "}
            {Infopagecontent.map((res) => {
              return res.number8;
            })}
          </span>
          <p>
            {Infopagecontent.map((res) => {
              return res.content8;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infopage;
