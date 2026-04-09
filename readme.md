# folhear

/*
/FOLHEAR
/backend
|
|
└── index.js             # Arquivo principal (ponto de entrada)
|
├── /data (banco de dados)# Scripts SQL para criação e manipulação do banco de dados
│   ├── bd.sql           # Script para criar tabelas e inserir dados iniciais
│   └── bd.js            # Configuração de conexão com o banco de dados 
| 
├── /rotas               # Camada de rotas da API
│   └── CadastroRotas.js # Gerencia as rotas relacionadas ao cadastro de usuários
│   └── LoginRotas.js    # Gerencia as rotas relacionadas ao login
│   └── CategoriaRotas.js# Gerencia as rotas relacionadas às categorias
│   └── LivroRotas.js    # Gerencia as rotas relacionadas aos livros
│   └── UsuarioRotas.js  # Gerencia as rotas relacionadas aos usuários
│   └── AdmRotas.js      # Gerencia as rotas relacionadas aos administradores
└── /readme.md           # Documentação do projeto
 
frontend
/public                 # Arquivos estáticos (HTML, CSS, JS) (arthur)
|
├── /inicial            # tela principal (home)
│   ├── index.html      # Tela principal
│   └── style.css       # Estilização
|
├── /cadastro           # Tela de início (cadastro)
│   ├── index.html      # Tela de cadastro
│   └── style.css       # Estilização
│   └── script.js       # Lógica da página de cadastro  
|
├── /login              # Tela de login (após login)
│   ├── index.html      # Tela de login
│   └── style.css       # Estilização
│   └── script.js       # Lógica da página de login
| 
├── /categoria          # Tela de categorias (após login)
│   ├── index.html      # Tela de categorias
│   └── style.css       # Estilização  
│   └── script.js       # Lógica da página de categorias
|
├── /livros             # Tela de livros (após escolher categoria)
│   ├── index.html      # Tela de livros
│   └── style.css       # Estilização
│   └── script.js       # Lógica da página de livros
|
├── /livro-details      # Tela de detalhes do livro (após escolher um livro)
│   ├── index.html      # Tela de detalhes do livro
│   └── style.css       # Estilização
│   └── script.js       # Lógica da página de detalhes do livro
|
├── /perfil             # Tela de perfil (- opcional, pode ser acessada a qualquer momento após o login)
│   ├── index.html      # Tela de perfil
│   └── style.css       # Estilização
│   └── script.js       # Lógica da página de perfil
|
├── /adm                # Tela de administrador ( após login de adm - acesso restrito)
│   ├── index.html      # Tela de administrador
│   └── style.css       # Estilização
│   └── script.js       # Lógica da página de administrador
|
└── /img                # Imagens, ícones e outros arquivos estáticos
    ├── logo.png        # Logo do projeto
    └── ...             # Outras imagens e ícones
*/

ou assim:
/backend
├── /data                # Persistência e dados
│   ├── bd.js            # Configuração e conexão com o banco de dados
│   └── bd.sql           # Scripts SQL (DDL e DML inicial)
├── /rotas               # Definição dos endpoints da API
│   ├── AdmRotas.js      # Rotas de administração
│   ├── CadastroRotas.js # Rotas de registro de usuários
│   ├── CategoriaRotas.js# Rotas de categorias de livros
│   ├── LivroRotas.js    # Rotas de manipulação de livros
│   ├── LoginRotas.js    # Rotas de autenticação
│   └── UsuarioRotas.js  # Rotas de perfil e dados do usuário
├── index.js             # Ponto de entrada (Entry point) do servidor
└── readme.md            # Documentação específica do backend

/frontend
└── /public
    ├── /adm             # Painel administrativo (acesso restrito)
    ├── /cadastro        # Fluxo de criação de conta
    ├── /categoria       # Listagem de categorias disponíveis
    ├── /img             # Assets (Logos, ícones e imagens estáticas)
    ├── /inicial         # Home page (ponto de partida)
    ├── /livro-details   # Detalhes específicos de uma obra
    ├── /livros          # Listagem de livros por categoria
    ├── /login           # Interface de autenticação
    └── /perfil          # Área logada do usuário