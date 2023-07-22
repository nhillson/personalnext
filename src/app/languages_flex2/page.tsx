'use client'

import React from "react";
import './styles.css'

interface Lang {
  language: string;
  resources: string[];
}

const langs: Lang[] = [
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

function LangRow(props) {
  if (!props) {
    return null
  }

  console.log(props)
  let language = props.lang.language;
  let resources = props.lang.resources.join(", ");
  return (
    <div className="lang-page-container row">
      <div className="lang-page-container content">
      {language}

      </div>
      <div className="lang-page-container caret">
      <img src="images/caret.svg" alt="caret" className="caret"/>
      </div>
    </div>
  );
}

function LangList() {
  return (
    <div className="lang-page-container outer">
      <div className="lang-page-container title">
        My Languages
        
      </div>
      {langs.map(lang => <LangRow lang={lang} />)}
    </div>
  );
}

export default function Languages() {
    return (
        <div>
            <LangList />
        </div>
    )
}