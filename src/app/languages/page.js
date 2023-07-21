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

export default function Languages() {
    return (
        <div>
            <h1>Hello, languages</h1>
        </div>
    )
}