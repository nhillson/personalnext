import styles from "./styles.module.css";
import Link from "next/link";

const langs = [
  { language: "C", resources: ["Harvard's CS50X"] },
  {
    language: "Python 3",
    resources: [
      "Python Crash Course",
      "Harvard's CS50X",
      "Harvard's CS50P",
      "Code Combat",
      "The Big Book of Small Python Projects",
    ],
  },
  {
    language: "HTML/CSS",
    resources: ["Harvard's CS50X", "Harvard's CS50W", "FreeCodeCamp"],
  },
  {
    language: "JavaScript",
    resources: ["Harvard's CS50W", "Mozilla Developer Network", "Code Combat"],
  },
  { language: "SQL", resources: ["Harvard's CS50X"] },
  { language: "Django", resources: ["Harvard's CS50W"] },
  { language: "React", resources: ["Harvard's CS50W", "React Documentation"] },
];

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
    </>
  );
}
