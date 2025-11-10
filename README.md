# 🧠 NestJS for NextJS

Esse projeto é o **backend** da aplicação que desenvolvi com **Next.js** no front-end.  
Aqui foi onde eu mergulhei de verdade no **NestJS**, aprendendo seus conceitos, estrutura e boas práticas para criar uma API moderna e segura.

---

## 🚀 O que foi feito

Durante o desenvolvimento, implementei:

- Criação e autenticação de usuários usando **JWT (JSON Web Token)**.  
- Criptografia de senhas com **bcrypt**.  
- Validação de dados com **class-validator**.  
- Banco de dados **SQLite3** para armazenar as informações.  
- Configuração de variáveis de ambiente com **dotenv**.  
- Tipagem com **TypeScript**, e em alguns pontos usei **JavaScript** também.  

O foco foi entender **como o NestJS funciona por dentro**, desde os módulos e controladores até os serviços e a injeção de dependências.

---

## 🔐 Autenticação

Implementei autenticação com **JWT**, para garantir que o acesso a determinadas rotas só seja permitido a usuários autenticados.

O fluxo é simples:
1. O usuário se cadastra informando nome, e-mail e senha.  
2. A senha é **hashada com bcrypt** antes de ser salva no banco.  
3. No login, o backend gera um **token JWT**.  
4. Esse token é usado no header `Authorization` para acessar rotas protegidas.

---

## 🗄️ Banco de Dados

Usei **SQLite3** por ser leve e prático para testar o backend sem precisar configurar um servidor de banco de dados.  
Ele funciona muito bem para projetos em fase de aprendizado e prototipagem.

---

## 🧰 Tecnologias

- **NestJS**  
- **TypeScript**  
- **SQLite3**  
- **JWT (jsonwebtoken)**  
- **bcrypt**  
- **dotenv**

---

## 🧠 O que aprendi

Esse projeto me ajudou a entender melhor:
- A estrutura modular do **NestJS**.  
- Como funciona a **injeção de dependências** e os **providers**.  
- A diferença entre **DTOs, controllers e services**.  
- Como proteger rotas com **guards** e tokens JWT.  
- Como organizar um backend escalável e fácil de manter.  

Foi um ótimo exercício para conectar o backend com o **frontend em Next.js**, simulando um projeto real.

---
