import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian | Developer&#39;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={`${styles["hero-section"]}`}>
        <div className={`${styles["container"]}`}>
          <div className={`${styles["hero--main-content"]}`}>
            <span className={`${styles["hero__beforetext"]}`}>
              Hi, my name is
            </span>
            <h1>Sebastian Yii.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              dolor dui ultrices nibh. Nibh a enim elementum molestie nibh
              velit. Sed imperdiet vulputate sem consectetur cursus. Risus
              cursus lacinia facilisis sed nec. Pretium malesuada consequat
              felis nunc.
            </p>

            <div className={`${styles["btn-wrapper"]}`}>
              <button className={`${styles["btn"]} ${styles["btn--outline"]}`}>
                Get in Touch
              </button>
              <button className={`${styles["btn"]} ${styles["btn--filled"]}`}>
                My Works
              </button>
            </div>

            <span className={`${styles["scroll"]}`}>
              Scroll Down <FaArrowDown />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
