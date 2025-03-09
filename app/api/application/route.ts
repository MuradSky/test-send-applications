import { NextRequest, NextResponse } from 'next/server';
import Joi from 'joi';
import nodemailer from 'nodemailer';
import fileWork from '../utils/file-work';

const schema = Joi.object({
  surname: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
  patronymic: Joi.string().allow('').optional(),
  birthDate: Joi.date().required(),
  email: Joi.string().email().required(),
  occupation: Joi.string().allow('').optional(),
  conferenceDays: Joi.string().min(1).required(),
});

export async function POST(
  request: NextRequest,
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Ваш Gmail
      pass: process.env.GMAIL_PASS, // Ваш пароль приложения
    },
  });

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

    const mailOptions = {
      from: `${value.name} ` + process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // На какой email отправляется заявка
      subject: 'Новая заявка с сайта',
      text: `
        Имя: ${value.name}
        Фамилия: ${value.surname}
        Отчество: ${value.patronymic}
        Дата рождения: ${value.birthDate}
        Email: ${value.email}
        Профессия: ${value.occupation}
        Дни конференции: ${value.conferenceDays}
      `,
      replyTo: value.email,
    };


    // Если все поля валидны
    await transporter.sendMail(mailOptions);
    const responseBody = { message: 'Данные успешно валидированы' };
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
