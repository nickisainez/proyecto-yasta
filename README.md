# Proyecto Yasta

## Descripción

El presente proyecto se trata del diseño, estructura e implementación del backend y frontend de un aula virtual comprendiendo sus características tales como asistencia, cursos, matrículas, pagos, etc.

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
