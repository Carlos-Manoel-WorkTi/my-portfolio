import "./Skill.css"
import React from 'react'

export default function Skill({children}:{children:React.ReactNode}) {
  return (
    <>
      <section id="s_habilidades">
        <h2 id="subTitleSkill">HABILIDADES</h2>
        {children}
      </section>
    </>
  )
}
