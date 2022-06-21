## Descrição

Brain AG, sistema crud de agricultura desenvolvido em nestjs e typeorm.

## Instalação

```bash
yarn install
```

## Iniciando a aplicação

```bash
Comandos:
yarn typeorm migration:run -d "src/database/index.ts"
yarn start

Para rodar o seed no banco de dados, basta fazer um GET em
http://localhost:3000/internals/initial-seed

Na pasta raiz está o arquivo com a coleção do postman, basta importar para executar as chamadas.
Nome do arquivo: Brain Agriculture.postman_collection.json
```

## Testes Unitários

```bash
Crie um banco de dados no postgres com o nome brain_ag_test

yarn test
```

## Desenvolvimento

- Autor - [Yuri Protásio](https://github.com/yuriprotasio)
