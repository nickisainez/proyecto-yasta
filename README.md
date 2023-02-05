# Proyecto Yasta

## Descripción

El presente proyecto se trata del diseño, estructura e implementación del backend `(repositorio actual)` y frontend `(link en la parte inferior)` de un aula virtual comprendiendo sus características tales como asistencia, cursos, matrículas, pagos, etc.

## Frontend del proyecto en Vue

https://github.com/tabluz/webapp1

## Integrantes

El proyecto está conformado por:

- Alvaro Jose Chancafe Araujo
- Daniel Moran Vilchez
- Elias Champi Hancco
- Emily Alva Flores
- Maria Cristina Gonzales Baldera
- Nicki Arnold Alejandro Sainez Pezantes

## Requerimientos

- Manejo de repositorio:

  - Plataforma: [github]
  - Aplicando metodología base de [gitflow]
  - Uso de [pull requests]

- Tecnologías a usar:
  - Typescript
  - Twilio
  - Vercel / Netlify
  - Supabase
  - Socket.io

# Pasos para actualizar la rama local

```sh
git checkout main
git fetch origin main
git merge origin/main
git checkout turama
git merge main
```

# Pasos correr el servidor

Luego de hacer un

```sh
git clone https://github.com/nickisainez/proyecto-yasta.git

```

ejecute los siguientes comandos

```sh
npm install
touch .env
```

Copie el contenido de .env-example a .env
luego ejecute

```sh
npx prisma migrade dev --name init
docker-compose up -d
npm run dev
```

# Pasos para subir y hacer pull request

```sh
// estando en tu rama
git add .
git commit -m "mensaje"
git push origin turama
```

> Despues debe crear pull request
> pull request tiene una estructura, verifique pull request anteriores

# Nota

Este repositorio y su contenido se proporcionan "tal cual" y sin garantía de ningún tipo, ya sea expresa o implícita. Utilice bajo su propio riesgo.

# Contribuciones

Este repositorio está abierto a contribuciones de la comunidad. Si desea contribuir, por favor envíe una solicitud de pull con sus cambios. Asegúrese de seguir nuestras guías de estilo y de documentar adecuadamente sus cambios. Si encuentra algún error o tiene sugerencias para mejorar la función, por favor abra un issue para discutirlo.
