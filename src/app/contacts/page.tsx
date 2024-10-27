'use client';

import React, { useState } from 'react';
import Footer from '@/components/footer/Footer';
import Bg from '@/components/bg/bg';
import Image from 'next/image';
import NavBottom from '@/components/navBottom/NavBottom';
import "./style.css";

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email enviado com sucesso!');
        setFormData({ name: '', email: '', message: '' }); // Limpar o formulário após o envio
      } else {
        setStatus('Erro ao enviar o email. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro ao enviar o email. Tente novamente.');
    }
  };

  return (
    <>
      <h2 id='titleContact'>Entre em contato comigo</h2>
      <main>
        <Bg />
        <Image
          id="rk_contact"
          src="/about/rk.gif"
          alt="My GIF"
          width={200}
          height={200}
          unoptimized={true}
        />
        <div id="containerContact">
          <form onSubmit={handleSubmit} id='formContact'>
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange} 
              required
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange} 
              required
            />
            <label htmlFor="message">Mensagem</label>
            <textarea 
              name="message" 
              id="message" 
              value={formData.message}
              onChange={handleChange} 
              required
            ></textarea>
            <div id='containerSubmit'>
              <button type="submit">Enviar</button>
            </div>
          </form>
          {status && <p>{status}</p>} {/* Mostrar a mensagem de status */}
        </div>
      </main>
      <NavBottom place='contacts' />
      <div className="navBottomFooter">
        <Footer />
      </div>
    </>
  );
}
