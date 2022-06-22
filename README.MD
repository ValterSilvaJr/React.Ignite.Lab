### Projeto criado utilizando o framework [Vite](https://vitejs.dev/guide/) na semana Ignite Lab da [Rocketseat](https://www.rocketseat.com.br/).

<br>

###### Tecnologias utilizadas
* [Apollo Client](https://www.apollographql.com/docs/react/) para requisições Graphql
* [Graphql](https://graphql.org/learn/) para consultas a API
* [GraphCMS](https://graphcms.com/docs/guides/getting-started/create-a-project) para consumo do conteúdo que será exibido no front-end utilizando Graphql

<br>

###### Bibliotecas utilizadas para desenvolvimento
* [TailwindCSS](https://tailwindcss.com/docs/installation) para estilização CSS
* [PostCSS](https://postcss.org/) é um ecossistema de plugins personalizados e ferramentas
* [Autoprefixer](https://postcss.org/) para adicionar prefixos de regras CSS no navegador utilizado

<br>

###### Configurações do Tailwindcss
````
  yarn tailwindcss init -p
````
  Este comando irá gerar um arquivo ``` tailwind.config.js ``` na raiz do projeto com o seguinte trecho de código:
  ```javascript
1   /** @type {import('tailwindcss').Config} */
2   module.exports = {
3   content: [],
6   theme: {
7     extend: {},
8   },
9     plugins: [],
10  }
11
  ```
Adicione o trecho de código da linha 3 no arquivo de configuração.
  ```javascript
1  /** @type {import('tailwindcss').Config} */
2   module.exports = {
3   content: ['./src/**/*.tsx'],
6     // restante do código...
7    }
  ```

Fazendo isto o `tailwindcss` passa a entender que você irá apenas estilizar os arquivos que estiverem neste diretório `(linha 3)` e desse tipo de arquivo `(.tsx)`.

<br>

###### Recomendação de extensões para intellisense e highlighting
* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) Syntax highlighting for modern and experimental CSS in VSCode
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Intelligent Tailwind CSS tooling for VS Code
* [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) extension for VSCode adds syntax highlighting, validation, and language features like go to definition, hover information and autocompletion for graphql projects. This extension also works with queries annotated with gql tags or comments.
