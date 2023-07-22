'use client'

import { useState } from "react";
import styles from './styles.module.css'

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

function LangItem({ lang, activeRow, onClick }) {
  let language = lang.language;
  let resources = lang.resources.join(", ");
  return (
    <tr onClick={onClick} className={styles.tr}>
      <td className={styles.td}>
        <div className={styles.table_lang}>
          <b>{language}</b>
        </div>
        {activeRow === language ? (
          <div className={styles.table_resource}>Resources: {resources}</div>
        ) : (
          <div></div>
        )}
      </td>
      <td className={styles.caret}>
        <img src="images/caret.svg" alt="caret" className={styles.caret}/>
      </td>
    </tr>
  );
}

function LangList() {
  const [activeRow, setActiveRow] = useState("None");
  const rows = [];
  langs.forEach((lang) => {
    rows.push(
      <LangItem
        lang={lang}
        activeRow={activeRow}
        onClick={() => {
          if (lang.language === activeRow) {
            setActiveRow("None");
          } else {
            setActiveRow(lang.language);
          }
        }}
        key={lang.language}
      />
    );
  });
  return (
    <table className={`${styles.langtable} ${styles.table}`}>
      <thead>
        <tr>
        <th className={styles.th}>Languages</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function Languages() {
    return (
        <div>
            <LangList />
        </div>
    )
}