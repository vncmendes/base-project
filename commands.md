# Commands / Comandos

npm init -y
npm install typescript @types/node tsx tsup -D
npx tsc --init
npm i fastify
npm i dotenv
npm i prisma -D
npm i @prisma/client
npx prisma migrate dev - gera as migrations e reflete as alterações nas tabelas do banco, criando os que não tinha antes.
docker run --name base-project -e POSTGRESQL_USERNAME=dockervnc -e POSTGRESQL_PASSWORD=dockervnc -e POSTGRESQL_DATABASE=baseproject -p 5432:5432  bitnami/postgresql
docker ps -> lista os containers ativos
docker ps -a -> lista todos containers já criados.
docker start -> id ou nome do container
docker stop -> id ou nome do container
docker rm -> -> id ou nome do container
docker compose up -d -> starta o container baseado no docker compose, -d faz rodar em 'background'
npm i bcryptjs
npm i @types/bcryptjs -D
npm i vitest vite-tsconfig-paths -D
create a vite.config.ts
npm i @vitest/coverage-v8
npm i @vitest/ui -D
-------------------------------------------------------------------------------------------->
configurando as importações no arquivo tsconfig.json
"baseUrl": "./",
"paths": {  
"@/*": ["./src/*"]
},
-------------------------------------------------------------------------------------------->
para parar o erro delete ' cr ' eslint prettier/prettier, dentro do arquivo eslintrc.son.
"prettier/prettier": [
    "error",
    {
      "endOfLine": "auto"
    }
  ]
-------------------------------------------------------------------------------------------->
ctrl + shift + P = abre as configurações globais do vscode.
-------------------------------------------------------------------------------------------->
npx executa os scripts de dentro do node_modules
-------------------------------------------------------------------------------------------->