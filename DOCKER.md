# Docker и деплой

## Локальная сборка образа

```bash
docker build -t shadow-site .
```

С опциональными переменными Base44 (если используете бэкенд):

```bash
docker build -t shadow-site \
  --build-arg VITE_BASE44_APP_ID=your_app_id \
  --build-arg VITE_BASE44_FUNCTIONS_VERSION=your_version \
  --build-arg VITE_BASE44_APP_BASE_URL=your_base_url \
  .
```

Без этих аргументов приложение собирается и работает без Base44 (лендинг, статика).

## Запуск на сервере (Traefik)

Образ публикуется в GitHub Container Registry: `ghcr.io/ephemeral172/shadowgpt-site:latest`.

На сервере с Traefik и сетью `traefik_net`:

```bash
docker compose pull
docker compose up -d
```

Сайт будет доступен по https://shadowgpt.app и https://www.shadowgpt.app.

## GitHub Actions

При push в `main` или `master` workflow собирает образ и пушит его в GHCR. Секреты `VITE_BASE44_APP_ID`, `VITE_BASE44_FUNCTIONS_VERSION`, `VITE_BASE44_APP_BASE_URL` в репозитории опциональны: без них сборка идёт в режиме «без Base44».
