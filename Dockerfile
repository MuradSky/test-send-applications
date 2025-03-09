# Используем Node.js 20.x
FROM node:20.10.0-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь код
COPY . .

# Строим Next.js в продакшн-режиме
RUN npm run build

# Минимальный образ для продакшна
FROM node:20.10.0-alpine AS runner

WORKDIR /app

# Копируем файлы сборки и зависимости
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Запускаем Next.js в продакшн-режиме
CMD ["npm", "run", "start"]
