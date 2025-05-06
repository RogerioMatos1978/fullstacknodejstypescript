## Requisitos

* Node.js 22 ou superior - Conferir a versão: node -v

## Como rodar o projeto baixado

Istalar as dependencias indicadas pelo arquivo package.json

```
npm install
```

Compilar os arquivos TypeScript. -watch: O Compilador fica monitorando os arquivos .ts do projeto. Sempre que o arquivo
é alterado, o tsc recompila automaticamente para gerar os arquivos .js correspondentes.
```
npx tsc -watch
```

Compilar os arquvios TypeScript
```
npx tsc
```

Executar o arquivo JavaScript compilado
```
node dsit/index.js
```

## Sequencia para criar o projeto

Criar o arquivo package.
```
npm init
``` 

Instalar o TypeScript como ma dependeica de desenvolvimento
```
npm install  --save-dev typescript
```

Criar o arquivo tsconfig.json, executar quando o typescript foi instalado somente no projeto
```
npx tsc --init
```

Compilar os arquvios TypeScript
```
npx tsc
```

Executar o arquivo JavaScript compilado
```
node dsit/index.js
```