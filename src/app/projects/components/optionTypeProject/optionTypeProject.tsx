import Link from "next/link"
import "./optionTypeProject.css"
import React from 'react'
import {Chakra_Petch} from "next/font/google"

const mainFontChakra = Chakra_Petch({
  weight:['300'],
  subsets:["latin"]
})


export default function OptionTypeProject() {
  return (
    <div className={mainFontChakra.className}>
     <h2 id="sbt">Escolha uma área para explorar:</h2>
    <div id="container-opt-p" >
      <div className="option-wrap bg-green-400">
        <div className="option-content"><Link href={""}>Projetos Fullstack</Link></div>
      </div>
      <div className="option-wrap bg-blue-500">
        <div className="option-content"><Link href={""}>Projetos Front</Link></div>
      </div>
      <div className="option-wrap bg-purple-700">
        <div className="option-content"><Link href={""}>Projetos Back</Link></div>
      </div>
    </div>
  </div>
  )
}
