'use client';

import React, { useState, useEffect } from 'react';
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
  const [showToast, setShowToast] = useState(false);
  const [gratitudeMessage, setGratitudeMessage] = useState(false);

  useEffect(() => {
    if (status) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
        setStatus(null);

        // Após sumir a primeira mensagem, mostrar a segunda de agradecimento
        setGratitudeMessage(true);

        // Sumir a mensagem de agradecimento após 3 segundos
        const gratitudeTimer = setTimeout(() => {
          setGratitudeMessage(false);
        }, 3000);

        return () => clearTimeout(gratitudeTimer);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

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
    setGratitudeMessage(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email enviado com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erro ao enviar o email. Tente novamente.');
      }
    } catch {
      setStatus('Erro ao enviar o email. Tente novamente.');
    }
  };

  const toastStyles: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: '350px',
    padding: '14px 24px',
    borderRadius: '10px',
    color: 'white',
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    backgroundColor: status && status.includes('sucesso') ? '#22c55e' : '#ef4444',
    opacity: showToast ? 1 : 0,
    transition: 'opacity 0.4s ease',
    zIndex: 9999,
    textAlign: 'center',
  };

  const gratitudeStyles: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: '350px',
    padding: '14px 24px',
    borderRadius: '10px',
    color: '#155e75', // azul escuro
    backgroundColor: '#bae6fd', // azul claro
    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
    opacity: gratitudeMessage ? 1 : 0,
    transition: 'opacity 0.4s ease',
    zIndex: 9999,
    textAlign: 'center',
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

          {/* Toopup 1 */}
          {status && (
            <div style={toastStyles}>
              {status}
            </div>
          )}

          {/* Toopup 2 - mensagem de agradecimento */}
          {gratitudeMessage && (
            <div style={gratitudeStyles}>
              Obrigado pela mensagem! Entrarei em contato logo logo.
            </div>
          )}
        </div>
      </main>
      <NavBottom place='contacts' />
      <div className="navBottomFooter">
        <Footer />
      </div>
    </>
  );
}
