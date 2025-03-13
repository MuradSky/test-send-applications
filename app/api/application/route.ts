import { NextRequest, NextResponse } from 'next/server';
import Joi from 'joi';
import nodemailer from 'nodemailer';
import fileWork from '../utils/file-work';

const schema = Joi.object({
  surname: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
  patronymic: Joi.string().allow('').optional(),
  birthday: Joi.string().required(),
  email: Joi.string().email().required(),
  occupation: Joi.string().allow('').optional(),
  date: Joi.string().min(1).required(),
});

export async function POST(
  request: NextRequest,
) {
  try {
    const body = await request.json();
    const { error, value } = schema.validate(body);
  
    if (error) {
      return new NextResponse(
        JSON.stringify({ message: error.details[0].message }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    fileWork(value)

    const responseBody = { message: 'Данные успешно валидированы' };

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false,
        auth: {
          user: process.env.MAIL_PORT,
          // pass: process.env.MAIL_USERNAME,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: value.email,
        subject: 'Заявка на регистрацию в Junior PayTech Forum',
        text: `
          Имя: ${value.name}
          Фамилия: ${value.surname}
          Отчество: ${value.patronymic}
          Дата рождения: ${value.birthday}
          Email: ${value.email}
          Профессия: ${value.occupation}
          Дни конференции: ${value.date}
        `,
        replyTo: value.email,
      };

      // Если все поля валидны
      const info = await transporter.sendMail(mailOptions);
      console.log('Сообщение отправлено: %s', info.messageId);
    } catch(error) {
      console.error('Ошибка отправки письма:', error);
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch(error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Ошибка при обработке данных', error: error }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      },
    );
  } 
};
