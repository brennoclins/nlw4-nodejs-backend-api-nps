![screen](./bg-nlw4.png)


# API NPS(Net Promoter Score)


Aluno: Brenno

### aula-01

- [X] O que é nodejs
- [x] API RestFull
- [x] O que é typescript
- [x] Criar projeto com NodeJs, Typescript, express
- [x] Criar rota GET
- [x] Conhecer os tipos de métodos (get,post, put, patch, delete)
- [x] Criar rota POST
- [x] Configurar o insominia

### aula-02

- [x] Instalar TypeORM e reflect-metadata
- [x] Configurar TypeORM
    - criar script "typeorm"
- [x] Criar migration de usuario
- [x] Criar model de usuario
- [x] Criar controller do usuario
- [x] Criar rota do usuario
- [x] codigo do desafio aula 2: "#jornadainfinita"

### aula-03

- [x] Refatorando controller
    - Creiar um repository de usuários
    - Alterar no controller para o repository criado
- [x] Criar migration de pesquisas (survey)
- [x] Criar controller de pesquisas
- [x] O que são testes automatizados?
- [x] Criar o primeiro teste
- [x] Código do desafio aula-03: #focopraticagrupo

### aula-04

- [x] Criar migration de surveysUsers
- [x] Criar model
- [x] Criar repositorio
- [x] Criar controller
- [x] Criar serviço de e-mail
- [x] Enviar e-mail
- [x] Código da aula-04: "#neverstoplearning"

### aula-05

- [x] Refatorando o SendMailController
- [x] Criar controller de resposta de usuário
- [x] Validar se usuário existe
- [x] Alterar a nota da resposta
- [x] Criar controle de calculo de NPS
- [x] Criar validações
- [x] Criar classe de Erros
- [x] Código da aula-05: "#missioncomplete"

```txt
Calculo NPS

notas: 1 2 3 4 5  6 7 8 9 10

detratores = 0 1 2 3 4 5 6
passivos = 7 8
Promotores = 9 10

( (totalPromotores - totalDetratores) / (totalRespondentes) ) x 100
```