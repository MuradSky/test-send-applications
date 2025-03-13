.PHONY: build up down logs restart

# Сборка образов Docker
build:
	docker-compose build

# Запуск контейнеров в фоновом режиме
up:
	docker-compose up -d

# Остановка и удаление контейнеров
down:
	docker-compose down

# Просмотр логов контейнеров в реальном времени
logs:
	docker-compose logs -f

# Перезапуск контейнеров с пересборкой образов
restart:
	docker-compose down && docker-compose up -d --build
