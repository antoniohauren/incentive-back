# README

Este é um repositório do GitHub contendo um projeto que utiliza TypeScript para desenvolvimento e compilação, incluindo scripts para migração de banco de dados e execução do servidor local. Abaixo estão os comandos necessários para executar essas tarefas:

## Configuração do Ambiente

Antes de iniciar o desenvolvimento, migração do banco de dados ou execução do servidor local, é necessário configurar o arquivo de ambiente. Copie o arquivo `.env.example` para `.env` e modifique as variáveis de acordo com sua configuração.

```bash
cp .env.example .env
```

Em seguida, abra o arquivo `.env` e modifique as variáveis de acordo com sua configuração, incluindo as informações necessárias para conexão com o banco de dados, se aplicável.

## Comandos

### Migração do Banco de Dados

Para executar a migração do banco de dados, utilize o seguinte comando:

```bash
npm run db:migrate
```

Este comando executa o script de migração localizado em `src/drizzle/migrate.ts`, utilizando o TypeScript e o pacote `dotenv` para carregar as variáveis de ambiente a partir do arquivo `.env`.

### Desenvolvimento

Para iniciar o servidor local e monitorar alterações nos arquivos de código-fonte, execute o seguinte comando:

```bash
npm run dev
```

Este comando inicia o servidor local utilizando o TypeScript para compilar e executar o arquivo `src/index.ts`. O parâmetro `--watch` monitora as alterações nos arquivos e reinicia automaticamente o servidor quando necessário.

### Compilação

Para compilar o projeto utilizando TypeScript, execute o seguinte comando:

```bash
npm run build
```

Este comando compila o projeto TypeScript, gerando os arquivos JavaScript na pasta `dist`.

### Utilização do Docker Compose

Se preferir executar o projeto utilizando Docker Compose, utilize o seguinte comando:

```bash
docker-compose up
```

Este comando inicia os contêineres conforme definido no arquivo `docker-compose.yml`, garantindo a consistência do ambiente de desenvolvimento. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina antes de executar este comando.

## Tecnologias
- [Nodejs](https://nodejs.org/) v20.11.1
- [Hono](https://hono.dev/) v4.1.0
- [Drizzle](https://orm.drizzle.team/) v0.30.1
- [Zod](https://zod.dev/) v3.22.4
- [Typescript](https://www.typescriptlang.org/) v5.4.2

## Preview

[preview.webm](https://github.com/antoniohauren/incentive-front/assets/101012531/ebbe2159-76da-4e6e-99fb-4ebda3eee7c4)
