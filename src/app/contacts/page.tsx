import React from 'react'
import "./style.css"
import Footer from '@/components/footer/Footer'

export default function page() {
  return (
    <>
      <h2 id='titleContact'>Entre em contato comigo</h2>
      <main>
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
      <Footer/>
    </>
  )
}
