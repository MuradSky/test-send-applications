This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# Формирование докер-образа:
docker-compose up --build
docker-compose down
docker-compose up -d

# Скачиваем образ Node.js 20
// docker pull node:20-alpine  

# Собираем образ вашего приложения !!!
docker build --platform linux/amd64 -t junior-paytech .

# Это создаст файл junior-paytech.tar, содержащий ваш готовый Docker-образ !!!
docker save junior-paytech -o junior-paytech.tar 

# На сервере выполнить:

# Загружаем образ из файла !!!
docker load -i junior-paytech.tar  

# Проверяем, что образ появился
docker images

# Запускаем контейнер !!!
docker stop junior-paytech
docker rm junior-paytech
docker run -d -p 3000:3000 junior-paytech
// передать .env.prod файл
docker run --env-file .env.prod -d -p 4000:3000 junior-paytech

# Проверка настроек почты
env | grep MAIL

docker stop <container_id>
docker rm <container_id>

# Войти в контейнер
docker exec -it nextjs_app sh

# Скачать файл заявок из контейнера !!!
docker cp nextjs_app:/app/upload/applications.csv ./applications.csv

# Залить в контейнер файл заявок после обновлени контейнера !!!
docker cp ./applications.csv nextjs_app:/app/upload/applications.csv


########################

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


