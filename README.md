# Projeto de BackEnd GTech 3.0

## Descrição

Este projeto é uma API backend desenvolvida em Node.js utilizando Express e Sequelize, com integração a banco de dados relacional (PostgreSQL). A aplicação segue uma arquitetura organizada em camadas (controllers, services, models, routes), com foco em escalabilidade, manutenção e separação de responsabilidades.

A API fornece funcionalidades para gerenciamento de usuários, autenticação, categorias e produtos, incluindo suporte a opções e imagens de produtos.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- JWT (JSON Web Token) para autenticação
- Bcrypt para hashing de senhas
- Swagger para documentação de API
- Jest e Supertest para testes

## Requisitos

- Node.js (versão 16 ou superior recomendada)
- PostgreSQL
- NPM ou Yarn

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd project-root
```

Instale as dependências:
```bash
npm i
```

## Configuração

Configure as variáveis de ambiente:

Crie ou edite o arquivo .env na raiz do projeto com as seguintes variáveis:

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
DB_PORT=5432
JWT_SECRET=sua_chave_secreta

Execute as migrações (caso utilize sequelize-cli):
```bash
npx sequelize-cli db:migrate
```

## Execução

Ambiente de desenvolvimento

```bash
node src/server.js
```

Ambiente de produção

```bash
npm start
```

A aplicação será iniciada em:

http://localhost:3001

## Documentação

A documentação da API pode ser acessada em:

http://localhost:3001/api-docs

Estrutura do Projeto
src/
├── app.js              # Configuração principal do Express
├── server.js           # Inicialização do servidor
├── config/
│   └── database.js     # Configuração do banco de dados
├── controllers/        # Controladores da aplicação
├── services/           # Regras de negócio
├── models/             # Modelos do Sequelize
├── database/           # Inicialização do ORM
├── routes/             # Definição das rotas
├── middleware/         # Middlewares (ex: autenticação)

## Funcionalidades

Autenticação de usuários com JWT

Cadastro e gerenciamento de usuários

CRUD de categorias

CRUD de produtos

Suporte a imagens e opções de produtos

Proteção de rotas com middleware de autenticação

## Exemplos de Uso da API

### Autenticação
POST /login

Exemplo de payload:

{
  "email": "usuario@email.com",
  "password": "senha"
}

Resposta:

{
  "token": "jwt_token_aqui"
}

Exemplo de rota protegida
GET /products
Authorization: Bearer <token>

## Documentação da API

A documentação Swagger pode ser acessada em:

http://localhost:3001/api-docs

## Testes

Para executar os testes:
```bash
npm test
```

## Contribuição

Fork o projeto

Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

Commit suas alterações:

```bash
git commit -m "Minha nova feature"
```

Push para o repositório:

```bash
git push origin minha-feature
```

Abra um Pull Request

## Boas Práticas Adotadas

Separação de responsabilidades (MVC + Services)

Uso de middlewares para autenticação

Organização modular do código

Uso de variáveis de ambiente

Estrutura escalável para crescimento da aplicação

## Licença

Este projeto está sob a licença ISC.

## Equipe de Desenvolvimento 👩🏻‍💻

Projeto desenvolvido com a ajuda surreal de [Nazaré Almeida](https://github.com/nazare4lmeida) e disciplina e persistência de Juliett Figueirêdo