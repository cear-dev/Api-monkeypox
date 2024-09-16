# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json (si lo tienes) para instalar dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Expone el puerto que utilizará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación utilizando ts-node
CMD ["npx", "ts-node", "src/index.ts"]
