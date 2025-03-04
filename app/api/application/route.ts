import { NextRequest, NextResponse } from 'next/server';
import Joi from 'joi';
import nodemailer from 'nodemailer';
import fs from "fs";
import path from "path";

const GMAIL_USER = 'skytechnic.music@gmail.com'
const GMAIL_PASS = 'tkfq ozqm xngm qidy' 

const schema = Joi.object({
  surname: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
  patronymic: Joi.string().allow('').optional(),
  birthDate: Joi.date().required(),
  email: Joi.string().email().required(),
  occupation: Joi.string().allow('').optional(),
  conferenceDays: Joi.string().min(1).required(),
});

const csvFilePath = path.join(process.cwd(), "public", "applications.csv");

export async function POST(
  request: NextRequest,
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER, // Ваш Gmail
      pass: GMAIL_PASS, // Ваш пароль приложения
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

    if (!fs.existsSync(csvFilePath)) {
      fs.writeFileSync(csvFilePath, "Фамилия,Имя,Отчество,Дата рождения,E-mail,Род деятельности,Дни участия в конференции*,Дата заявки\n", "utf8");
    }

    const newEntry = `${value.name},${value.email},${value.patronymic},${value.birthDate},${value.occupation},${value.conferenceDays},${new Date().toISOString()}\n`;

    fs.appendFileSync(csvFilePath, newEntry, "utf8");

    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER, // На какой email отправляется заявка
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
    };


    // Если все поля валидны
    await transporter.sendMail(mailOptions);
    const responseBody = { message: 'Данные успешно валидированы' };
    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch(error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Ошибка при обработке данных' }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      },
    );
  } 
};
