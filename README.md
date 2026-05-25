# Carlos Manoel | Portfolio

Portfolio pessoal desenvolvido com Next.js, React, TypeScript, Tailwind CSS, Three.js e Firebase. O site apresenta projetos, tecnologias, contato e uma experiencia visual com tema espacial.

## Tecnologias

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber
- Firebase / Firestore
- Nodemailer

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Variaveis de ambiente

Crie um arquivo `.env.local` com as chaves usadas pelo projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
GMAIL_USER=
GMAIL_PASS=
ALLOWED_ORIGINS=http://localhost:3000,https://portfolio-carlos-five.vercel.app
```

Para o Gmail, use uma senha de app, nao a senha principal da conta.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Melhorias recentes

- Formulario de contato com validacao, limite de tamanho, honeypot anti-spam e `replyTo` correto.
- Escape de HTML nas mensagens enviadas por email.
- Dependencias atualizadas e `npm audit` zerado.
- Metadados de SEO e Open Graph revisados.
- Fundo 3D com limpeza de recursos e suporte a reducao de movimento.
- Fallback local para a API de projetos em desenvolvimento.
