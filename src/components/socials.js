import React from "react"
import "./socials.css"

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
    <ul className="socials">
      {links.map(({ title, link }) => (
        <li key={title}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
