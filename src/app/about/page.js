import styles from "./styles.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className={styles.intro}>
        <h1 className={styles.title}>About Me</h1>
        <img
          src="images/profpic.jpg"
          alt="Profile"
          height={180}
          width={180}
          className={styles.profpic}
        />
        <p className={styles.prof_description}>
          Hi, I'm Nick. I'm a self-taught web developer living in the Twin
          Cities area.
        </p>
      </div>
      <div className={styles.centered}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h4 className={styles.column}>I am a...</h4>
            <ul>
              <li>
                <Link href="/">Programmer</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>I enjoy...</h4>
            <ul>
              <li>
                <Link href="/mushapp">Mycology</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
