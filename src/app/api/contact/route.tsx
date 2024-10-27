// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Verifique se todos os dados necessários foram fornecidos
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }

    // Configurar o transporte de e-mail (use suas credenciais)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Sua senha ou chave de aplicação
      },    
    });

    try {
      // Montar o e-mail que será enviado
      const mailOptions = {
        from: email, // E-mail do usuário que enviou a mensagem
        to: process.env.EMAIL_USER, // Seu e-mail
        subject: `Novo contato de ${name}`, // Assunto do e-mail
        text: `Você recebeu uma nova mensagem de ${name} (${email}):\n\n${message}`, // Corpo do e-mail
      };

      // Enviar o e-mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar o e-mail', error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
