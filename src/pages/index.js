import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaArrowDown } from "react-icons/fa";

import Image from "next/image";
import profilePic from "../../public/portrait.png";

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
        <img
          src="./grid-box.svg"
          alt="Grids"
          className={`${styles["grid-overlay"]}`}
        />
        <div className={`${styles["social-media-links"]}`}>
          <div className={`${styles["sm-links-wrapper"]}`}>
            <a href="#" className={`${styles["sm-link"]}`}>
              Linkedin
            </a>
            <a href="#" className={`${styles["sm-link"]}`}>
              Github
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}

      <section className={`${styles["about-me-section"]}`} id="about">
        <div className={`${styles["container"]}`}>
          <h2>About Me</h2>
          <div className={`${styles["about-me-content"]}`}>
            <div className={`${styles["about-me-image-container"]}`}>
              <Image
                src={profilePic}
                className={`${styles["about-me-image"]}`}
              />
            </div>
            <div className={`${styles["about-me-content-container"]}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                id donec venenatis ornare. Pellentesque venenatis donec pretium
                egestas dapibus eget. Cras nunc cras eu odio vel massa arcu
                suspendisse nunc. Odio risus, posuere quis eget pellentesque
                eget arcu in gravida. Lacus turpis aliquet morbi diam id et
                nulla morbi.
              </p>
              <p>
                Here are some technologies I work with:
                <ul>
                  <li>React with Next.js and Emotion or Styled Components</li>
                  <li>Django with React</li>
                  <li>Web API creation with Flask </li>
                </ul>
              </p>
              <button className={`${styles["btn"]} ${styles["btn--outline"]}`}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section>
        <div className="container">
          <h2>My Projects</h2>
        </div>
      </section>
    </>
  );
}
