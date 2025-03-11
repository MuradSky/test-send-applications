# Используем официальный образ Node.js
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или pnpm/yarn.lock)
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Собираем Next.js проект
RUN npm run build

# Удаляем dev-зависимости
RUN npm prune --omit=dev

# Второй этап для чистого окружения
FROM node:20-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы и зависимости из builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Запуск Next.js в продакшн-режиме
CMD ["npm", "run", "start"]