import fs from 'fs'
import path from 'path'
const csvFilePath = path.join(process.cwd(), "doc", "applications.csv");

const fileWork = (value: {
  surname: string,
  name: string,
  patronymic: string,
  birthDate: string,
  email: string,
  occupation: string,
  conferenceDays: string,
}) => {
  if (!fs.existsSync(csvFilePath)) {
    fs.writeFileSync(csvFilePath, "Фамилия,Имя,Отчество,Дата рождения,E-mail,Род деятельности,Дни участия в конференции*,Дата заявки\n", "utf8");
  }

  const newEntry = `${value.name},${value.email},${value.patronymic},${value.birthDate},${value.occupation},${value.conferenceDays},${new Date().toISOString()}\n`;

  fs.appendFileSync(csvFilePath, newEntry, "utf8");
}

export default fileWork;