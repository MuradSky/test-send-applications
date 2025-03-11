import fs from 'fs'
import path from 'path'
const csvFilePath = path.join(process.cwd(), "upload", "applications.csv");

const fileWork = (value: {
  surname: string,
  name: string,
  patronymic: string,
  birthday: string,
  email: string,
  occupation: string,
  date: string,
}) => {
  if (!fs.existsSync(csvFilePath)) {
    fs.writeFileSync(csvFilePath, "Фамилия,Имя,Отчество,Дата рождения,E-mail,Род деятельности,Дни участия в конференции*,Дата заявки\n", "utf8");
  }

  const newEntry = `${value.surname},${value.name},${value.patronymic},${value.birthday},${value.email},${value.occupation},${value.date},${new Date().toISOString()}\n`;

  fs.appendFileSync(csvFilePath, newEntry, "utf8");
}

export default fileWork;