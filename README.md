# TinderBook
Projeto de Doação de Livros
<h1 align="center">
  <img src="img.jpeg">
</h1>

#### Você sabe o que fazer com aqueles livros guardados que não usa mais?

#### Conhece algum leitor que se interessa por eles? 

#### Já pensou em um ambiente virtual onde você possa encontrar esse leitor e doar esses livros?

#### E se nesse mesmo ambiente você encontrar aquele livro que deseja sem pagar nada?

<P> Diante deste cenário, elaborei uma API chamada TinderBook, onde leitores possam disponibilizar os livros que desejam doar e ao mesmo tempo tenham a possibilidade de encontrar algum livro de seu interesse no mesmo acervo virtual. Para isto basta realizar um cadastro com as informações solicitadas e em seguida cadastrar o(s) livro(s) que deseja doar. Caso queira encontrar algum livro, basta fazer uma simples busca pelo acervo virtual, se alguém estiver doando o livro que deseja, entao é so entrar em contato com a pessoa e combinar a entrega. Se der match...o livro é seu! </P> 

### Pré-requisitos

Ferramentas necessárias:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/pt-br/). 

### Dependências Utilizadas

Express: ```npm install --save express```    
Nodemon: ```npm install --save-dev nodemon```  	  
Dotenv-safe: ```npm install --save dotenv-safe```
Mongoose: ```npm install --save mongoose``` 

### Instruções
```
# Clone este repositório	
$ git clone <https://github.com/andrezafss/TinderBook>	
#Acesse a pasta do projeto no terminal/cmd	
$ cd TinderBook
# Instale as dependências	
$ npm install	
# Execute a aplicação	
$ npm start	
```
### Estrutura 
```
pasta-do-projeto	
├── src	
│   ├── controller	
│   ├── model	   
│   ├── routes	   
│   └── app.js	
├── server.js	
├── package.json
```

### Rotas Leitores ###

| Método       | Processo               | Descrição                          |
| ---------    | ---------------------- | ---------------------------------- |
| 1.POST       | `/leitores`            | Cadastrar leitor                   |
| 2.GET        | `/leitores`            | Retornar todos os leitores         |
| 3.PUT        | `/leitores/:id`        | Substituir todas as informações    |
| 4.DELETE     | `/leitores/:id`        | Deletar um cadastro específico     |


### Rotas Livros ###

| Método       | Processo               | Descrição                          |
| ---------    | ---------------------- | ---------------------------------- |
| 1.POST       | `/livros  `            | Cadastrar livros                   |
| 2.GET        | `/livros`              | Retornar todos os livros           |
| 3.PUT        | `/livros/:id`          | Substituir todas as informações    |
| 4.DELETE     | `/livros/:id`          | Deletar um cadastro específico     |






	








