import React from "react"

import { scale } from "../utils/typography"

function Socials() {
  const links = [
    {
      title: "Github 🐙😸",
      link: "https://github.com/terrytilley",
    },
    {
      title: "LinkedIn 💼",
      link: "https://www.linkedin.com/in/terrytilley/",
    },
    {
      title: "Twitter 🐤",
      link: "https://twitter.com/terrytilley8",
    },
  ]

  return (
    <ul
      className="socials"
      style={{ margin: "0px", padding: "0px", listStyle: "none" }}
    >
      {links.map(({ title, link }) => (
        <li key={title}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...scale(0.275), textDecoration: "none" }}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
