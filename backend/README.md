## Backend do tindev
Tindev foi um projeto realizado na semana omnistack 8.0 da rockeatseat. Resolvi refazer o projeto, utilizando o typescript no backend e algumas alteracoes no front end.

### Backend
* nodejs
* express
* typescript
* mongodb

### Tindev
Funcionando similar ao tinder, o tinder para desenvolvedores tem como intuito "mostrar" desenvolvedores (que estao cadastrados no sistema) para outros desenvolvedores darem like e quem sabe rolar um pair programming.

### Rotas

* GET /devs - Retorna todos os usuarios que o usuario logado pode dar like. O id do usuario logado esta sendo passado no header da requisicao.

* POST /devs - Adiciona um novo desenvolvedor a aplicacao. Basicamente voce passara um usuario do github e a aplicacao ira usar a api do github para pegar as informacoes desse desenvolvedor.

* POST /likes - Ira dar like em um determinado desenvolvedor, passando no header o usuario logado e na url o usuario a quem voce esta dando like.

* POST /dislikes - Ira dar like em um determinado desenvolvedor, passando no header o usuario logado e na url o usuario a quem voce esta dando dislike.