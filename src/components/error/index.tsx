import React from 'react'
import "./style.css"
import Link from 'next/link'

export default function Error() {
  return (
    <section className='container-error'>
      <h2>Opps...houve algum error </h2>
      <Link href={"/"}>Voltar ao inicio</Link>
    </section>
  )
}
