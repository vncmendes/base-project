# App

GymPass style app.

## RFs (Requisitos Funcionais)
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível cadastrar os itens pelo ADM; 
- [ ] Deve ser possível fazer o orçamento do pedido;
- [ ] Deve enviar um email com o pedido ao ADM, com todas as informações PEDIDO/USUÁRIO;


## RNs (Regras de Negócio)
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário só poderá fazer o orçamento depois de logado;
 
## RNFs (Requisitos Não-Funcionais)
- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL/MySQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);