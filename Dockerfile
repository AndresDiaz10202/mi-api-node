# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar
CMD ["node", "index.js"]
