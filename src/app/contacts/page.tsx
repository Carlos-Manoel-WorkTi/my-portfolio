import React from 'react'
import "./style.css"
import Footer from '@/components/footer/Footer'
import Bg from '@/components/bg/bg'
import Image from 'next/image'
import NavBottom from '@/components/navBottom/NavBottom'

export default function page() {
  return (
    <>
      <h2 id='titleContact'>Entre em contato comigo</h2>
      <main>
      <Bg/>
      <Image
          id="rk_contact"
          src="/about/rk.gif"
          alt="My GIF"
          width={200}
          height={200}
          unoptimized={true}
        />
        <div id="containerContact">
          <form action="#" id='formContact'>
            <label htmlFor="name" >Nome</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"/>
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message"></textarea>
            <div id='containerSubmit'>
              <button type="submit">Enviar</button> 
            </div>
          </form>
        </div>
      </main>
      <NavBottom place='contacts'/>
      <div className="navBottomFooter">
        <Footer />
      </div>
    </>
  )
}
