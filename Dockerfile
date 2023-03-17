# Descargando la imagen alpine de Node.js
FROM node:18-buster-slim

# Declarando variables de entorno
#ENV ORACLE_BASE /usr/lib/instantclient
#ENV LD_LIBRARY_PATH /usr/lib/instantclient
#ENV TNS_ADMIN /usr/lib/instantclient
#ENV ORACLE_HOME /usr/lib/instantclient


# Ir a la carpeta de trabajo
WORKDIR /usr/src/app

# copiando archivos del package.json desde la maquina local a la imagen
COPY package*.json ./

# run npm install in our local machine

RUN npm install -g node-gyp

# Instalación de dependencias
RUN npm install

# Copiando todo de la maquina local a la imagen
COPY . .

# El comando con el cual se inicializara el contenedor
CMD ["node", "index.js"]