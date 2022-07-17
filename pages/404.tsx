/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import styles from "@styles/404.module.css"

export default function Page404() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <div className={styles.body}>
          <img
            className={styles.image404}
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
          />
        </div>
        <div className={styles.objects}>
          <img
            className={styles["object_rocket"]}
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
          />
          <div className={styles["earth-moon"]}>
            <img
              className={styles["object_earth"]}
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
            />
            <img
              className={styles["object_moon"]}
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
            />
          </div>
          <Link href="/">
            <a className={styles["box_astronaut"]} title="Go Home">
              <img
                className={styles["object_astronaut"]}
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </a>
          </Link>
        </div>
        <div className={styles.glowingStars}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      </div>
    </div>
  )
}
