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
      {/* <h2 id='titleContact'>Entre em contato comigo</h2> */}
      
        
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
          {/* Título estilizado */}
      <div className="text-center mb-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Entre em contato
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">
          Vamos conversar ✨
        </p>
      </div>
        <div id="containerContact">
          <form onSubmit={handleSubmit} id='formContact'>
            <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Nome
        </label>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">👤</span>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
            className="flex-1 rounded-md px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Email
        </label>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">📧</span>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu melhor email"
            required
            className="flex-1 rounded-md px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
      </div>

      {/* Mensagem */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escreva sua mensagem aqui..."
          required
          rows={5}
          className="rounded-md px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-green-500 outline-none"
        ></textarea>
      </div>
{/* Botão */}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="w-1/2 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          Enviar 🚀
        </button>
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
      <div className="navBottomFooter pt-5">
        <Footer />
      </div>
    </>
  );
}
