-- Crie um banco de dados no SQL com nome à sua escolha,
-- seguindo o modelo conceitual e logico (antes do SQL).

-- ========================== BD folhear =====================================
-- ========================== CRIAÇÃO DE DADOS =====================================
CREATE DATABASE folhear;

USE folhear;

-- DADOS CLIENTE
CREATE TABLE cliente(
    id PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(18) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(20) DEFAULT 'ativo',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP --autopreenche
    
);

CREATE TABLE telefone(
    id PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(20) NOT NULL,
    celular VARCHAR(20)
);

CREATE TABLE endereco(
    id PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(100) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    bairro VARCHAR(100) NOT NULL
);

-- DADOS LIVRO

CREATE TABLE categoria(
    id PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    ativo BOOLEAN DEFAULT ('true')
);

CREATE TABLE livro(
    id PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    disponivel BOOLEAN  DEFAULT 'ativo',
    status BOOLEAN DEFAULT 'ativo',
    -- preco DECIMAL(9,2) NOT NULL, substitui por disponivel/status
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    categoria_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

CREATE TABLE editora(
        id PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
);

CREATE TABLE estoque(
    id PRIMARY KEY AUTO_INCREMENT,
    quantidade
    status VARCHAR(20) DEFAULT 'ativo',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP --autopreenche
    codigo editora INT NOT NULL,
    codigo_livro INT NOT NULL

);



-- PEDIDO (LOGICA DE NEGOCIO)

CREATE TABLE pedido(
    id PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20) NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    data_pedido_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- +15 dias
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)

);

CREATE TABLE pedido_livro(
    id PRIMARY KEY AUTO_INCREMENT,
    quantidade INT NOT NULL,
    livro_id INT NOT NULL,
    FOREIGN KEY (livro_id) REFERENCES livro(id),
    pedido_id INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedido(id)
);

-- id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
--================================================================================== 

-- ========================== INSERSÃO DE DADOS ===================================== 
-- A) Insira ao menos 3 registros em cada tabela.

INSERT INTO cliente (nome, cpf, telefone) VALUES
('joao', '048048', '08003030'),
('carlos', '036036', '32283030'),
('ana', '040040', '07003030'),
('teste1', '080080', '01003030');

INSERT INTO categoria (nome) VALUES 
('lanhes'),
('bebidas'),
('petiscos'),
('teste2');

INSERT INTO produto(nome, Descricao, preco, categoria_id) VALUES
('coca cola', 'melhor refri', 9.99, 2),
('hamburguer', 'melhor lanche', 29.99, 1),
('pizza', 'melhor pizza', 59.99, 3);

INSERT INTO pedido(codigo, data_compra, cliente_id) VALUES
('000001', '2026-01-09 21:30:01', 1,  ),
('000002', '2026-01-09 21:10:35', 2),
('000003', '2026-01-09 22:05:08', 3);

INSERT INTO pedido_produto(quantidade, produto_id, pedido_id) VALUES 
(5, 2, 1 ),
(2, 1, 2),  -- tirar essa duvida com a tonton
(1, 3, 3 ), -- cliente ana id3 pediu 1 pizza(id3) e foi a 3 a comprar, 
(2, 1, 3 );  -- cliente ana id3 pediu 2 coca(id1) e foi a terceira a comprar, 

-- B) Faça uma consulta em cada tabela.

SELECT nome FROM clientes;
-- 'joao', 'carlos', 'ana

SELECT * FROM categoria;
-- 'lanches', 'bebidas', 'petiscos' 

SELECT nome FROM produto
WHERE id= 3;
-- 'pizza'

SELECT *  FROM pedido
WHERE id= 3;
-- ('000003', 3, '1000-01-01 00:00:00', 3, 3);

SELECT * FROM pedido_produto 
WHERE id =4;
-- (2, 1, 3 );   'cliente ana id3' pediu (2) coca (id1) e foi a (3) compra da noite, 

-- C) Altere 2 registros em tabelas diferentes.
UPDATE FROM cliente
SET nome = 'pedro'
WHERE nome = 'teste1';

UPDATE FROM categoria
SET nome = 'frete'
WHERE id = 4;

-- D) Delete 1 registro de 2 tabelas diferentes=

DELETE FROM categoria
WHERE nome = 'frete';

DELETE FROM cliente
WHERE id = 4;