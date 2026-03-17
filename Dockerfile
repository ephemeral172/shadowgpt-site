# syntax=docker/dockerfile:1

# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Build-args для Vite (опционально; без них приложение работает без Base44 / без аналитики)
ARG VITE_BASE44_APP_ID=
ARG VITE_BASE44_FUNCTIONS_VERSION=
ARG VITE_BASE44_APP_BASE_URL=
ARG VITE_GA_MEASUREMENT_ID=
ENV VITE_BASE44_APP_ID=$VITE_BASE44_APP_ID
ENV VITE_BASE44_FUNCTIONS_VERSION=$VITE_BASE44_FUNCTIONS_VERSION
ENV VITE_BASE44_APP_BASE_URL=$VITE_BASE44_APP_BASE_URL
ENV VITE_GA_MEASUREMENT_ID=$VITE_GA_MEASUREMENT_ID

COPY . .
RUN npm run build

# --- Runtime stage ---
FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
