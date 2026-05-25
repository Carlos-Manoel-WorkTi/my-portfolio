import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const fieldLimits = {
  name: 80,
  email: 120,
  message: 2000,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeField(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwardedFor || req.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: Request) {
  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ message: 'Dados inválidos.' }, { status: 400 });
  }

  const name = normalizeField(payload.name);
  const email = normalizeField(payload.email).toLowerCase();
  const message = normalizeField(payload.message);
  const website = normalizeField(payload.website);

  if (website) {
    return NextResponse.json({ message: 'Email enviado com sucesso!' });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Todos os campos são obrigatórios.' }, { status: 400 });
  }

  if (name.length > fieldLimits.name || email.length > fieldLimits.email || message.length > fieldLimits.message) {
    return NextResponse.json({ message: 'Mensagem muito longa. Revise os campos e tente novamente.' }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: 'Informe um email válido.' }, { status: 400 });
  }

  const clientIp = getClientIp(req);

  if (isRateLimited(clientIp)) {
    return NextResponse.json({ message: 'Muitas tentativas. Tente novamente em alguns instantes.' }, { status: 429 });
  }

  const { GMAIL_USER, GMAIL_PASS } = process.env;

  if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('Missing Gmail credentials for contact form.');
    return NextResponse.json({ message: 'Contato indisponível no momento.' }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');
    const subjectName = name.replace(/[\r\n]+/g, ' ').slice(0, fieldLimits.name);

    await transporter.sendMail({
      from: `"Portfolio Carlos" <${GMAIL_USER}>`,
      replyTo: { name, address: email },
      to: GMAIL_USER,
      subject: `Nova mensagem de ${subjectName}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong><br />${safeMessage}</p>
      `,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ message: 'Erro ao enviar o email. Tente novamente.' }, { status: 500 });
  }
}
