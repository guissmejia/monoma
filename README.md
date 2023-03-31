# PokeAPI

PokeAPI Web App

### ✨ [PokeAPI Demo](https://poke-api-monoma.vercel.app/)

### Pre-requirements 📋

1. NodeJS **10.15.3** or higher
2. NPM **6.9.0** or higher

### Installation 🔧

1. Clone the repository

```shell
  git clone <repository>
```

2. Position yourself in the main branch

3. Install dependencies

```shell
  npm install
```

4. Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```shell
  npm run start
```

## Login

5. The credentials to enter the site, are:

```shell
    email: ashketchum@gmail.com
    password: 12345
```
These, are hosted in src->utils->userCredentialsMock.json, these can be modified as desired for authentication..

## Test 📦

6. To run the unit tests using Cypress, remember to hold up the application in the terminal, then run:
```shell
  npm run test
```

## Env 📦

7. You can modify the port on which the application will run using the PORT variable found inside the .env file in the root of the project.

Every time you modify a variable, you must cancel the operation of the application and restart it with the npm run start command.

```shell
  PORT=3000
```
## Stack 🛠️

- [NPM](https://www.npmjs.com/) - Dependency handler.
- [TypeScript](https://www.typescriptlang.org/) - Main programming language.
- [React JS](https://es.reactjs.org/) - JavaScript Framework for the Frontend.
- [SCSS](https://sass-lang.com/guide) - Style preprocessor to compile CSS.
- [MUI](https://mui.com/) - React UI tools.