
# Usamos una imagen oficial de Node para construir la app
FROM node:18-alpine AS build

# Creamos y nos movemos al directorio /app dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalamos las dependencias de Node
RUN npm install

# Copiamos el resto del código fuente de tu app
COPY . .

# Construimos la app para producción (crea la carpeta /dist)
RUN npm run build

# Usamos una imagen ligera de Nginx para servir la app construida
FROM nginx:alpine

# Copiamos los archivos compilados de la etapa anterior a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para acceder al contenedor
EXPOSE 80

# Comando para iniciar Nginx en primer plano y mantener el contenedor activo
CMD ["nginx", "-g", "daemon off;"]
