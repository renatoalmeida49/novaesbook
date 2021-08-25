# novaesbook
  
Um clone da famosa rede social Facebook.  
  
## :clipboard: Sumário

- [Visão Geral](#visao-geral)
  - [O desafio](#o-desafio)
  - [Prints](#prints)
  - [Links](#link)
- [Meu processo](#meu-processo)
  - [Construção](#construcao)
  - [O que aprendi](#o-que-aprendi)
- [Futuras implementações](#futuras-implementacoes)
- [Como executar o projeto](#como-executar-o-projeto)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)
  
## :telescope: Visão geral

### O desafio  
  
Comecei meus estudos com programação Web como a grande maioria da minha idade, acredito eu: com HTML e PHP.  
  
Um dos projetos finais do meu curso de PHP foi a criação de um clone do Facebook. No curso ele foi chamado Devsbook.  
  
Fiquei impressionado com o que era possível construir com meu conhecimento de PHP e programação. Foi o primeiro projeto que vi uma utilidade prática, onde vi tudo que aprendi funcionando em conjunto para gerar um produto.  

Com o passar dos meses acabei conseguindo meu primeiro emprego como Dev Frontend utilizando VueJS. E com o Vue veio a utilização de APIs para os projetos. Naturalmente veio a vontade de aprender mais sobre backend e começar a construir sistemas completos. Dessa forma, abandonei o PHP e comecei meus estudos com NodeJS.  
  
Então me veio a ideia de refatorar todo o projeto Devsbook feito em PHP para uma versão em VueJS + NodeJS. Uma excelente forma de exercitar todo o conteúdo que estava aprendendo sobre as duas tecnologias em um projeto real.  
  
### Prints 

![]()

### Links

- Projeto online: [Netlify](https://ecstatic-jennings-4d87c0.netlify.app)  
  
## :pencil2: Meu processo  
  
### Construção
 
- Frontend:
  - VueJs
    - Vue-Router
    - Vuex
    - SCSS
- Backend:
  - NodeJS
    - Express

### O que aprendi  
  
Estou em constante evolução nos meus estudos e as refatorações serão constantes. Sempre buscando as melhores práticas para o gerenciamento de estado da aplicação e comunicação e reutilização de componentes.  
  
A preocupação com o uso de recursos do backend também é levada em conta, buscando sempre o menor número possível de chamadas no backend, ao mesmo tempo em que busco as melhores práticas em segurança da aplicação.  
  
## :satellite: Futuras implementações  
  
:white_medium_square: Fotos de perfil e de capa  
:white_medium_square: Envio de mensagens entre usuários  
:white_medium_square: Animações e transições  
:white_medium_square: Recuperação de senha  
:white_medium_square: Validação de e-mail de usuário    

## :arrow_forward: Como executar o projeto  
  
Para rodar o projeto em ambiente de desenvolvimento, primeiro você deve subir a API da aplicação.
Você pode encontrar a API e como a executar [nesse link](https://github.com/renatoalmeida49/novaesbook-api).  
  
Com a API rodando em sua máquina local, prossiga para os passos seguintes:  
  
- Após o clone do projeto, abra um terminal na raiz do projeto e execute o comando:
```
npm install
```
- Será necessário adicionar um novo host no arquivo de hosts de sua máquina.    

**Linux/Mac:**  
1. No terminal digite ```sudo nano etc/hosts```  
2. No arquivo que será aberto adicione ao final dele a linha ```127.0.0.1       novaesbook.local.com.br```  

**Windows:**
1. Abra um editor de texto no modo administrador
2. Procure pelo arquivo ```C:\Windows\System32\drivers\etc\hosts```
3. Adicione a linha ```127.0.0.1       novaesbook.local.com.br```   

- Com esses passos feitos, estará tudo pronto para rodar o projeto. Execute o comando:
```
npm run serve
```
## :smile: Autor
  
- Renato Novaes
  - [Website](https://www.renatonovaes.dev)  
  - [Linkedin](https://www.linkedin.com/in/renatonovaes49)
  - [Instagram](https://www.instagram.com/novaes_r)

## :clap: Agradecimentos  
  
* **Rafael Rodrigues** - O cara que sempre me leva pra o próximo nível de Vue e de NodeJS.
* **Bonieky** - Ele mesmo da B7Web. Que fez todo esse projeto com PHP no seu curso.
* **Thiago Vilasboas** - Olho clínico para achar melhorias na UI/UX.
