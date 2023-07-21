import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.flexcontainer}>
      <h2 className={styles.title}>
        Hello, and welcome to my website! This site contains several personal
        projects as well as a bit of information about myself, and will be
        updated over time to reflect my continuing education.
      </h2>
    </div>
  );
}
