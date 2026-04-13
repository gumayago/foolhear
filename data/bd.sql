-- Crie um banco de dados no SQL com nome à sua escolha,
-- seguindo o modelo conceitual e logico (antes do SQL).

-- ========================== BD folhear =====================================
-- ========================== CRIAÇÃO DE DADOS =====================================
CREATE DATABASE folhear;

USE folhear;

--! DADOS CLIENTE
CREATE TABLE cliente(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(18) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    status BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    telefone VARCHAR(20) NOT NULL,
    rua VARCHAR(100) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    bairro VARCHAR(100) NOT NULL
    img VARCHAR(255) || DEFAULT 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    senha VARCHAR(255) NOT NULL, 
    adm BOOLEAN DEFAULT FALSE
);
SHOW TABLES;
DESC cliente;


--! DADOS LIVRO
CREATE TABLE categoria(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    img VARCHAR(255) || DEFAULT 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    ativo BOOLEAN DEFAULT TRUE
);
SHOW TABLES;
DESC categoria;

CREATE TABLE autor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    biografia TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SHOW TABLES;
DESC autor;

CREATE TABLE estoque(
    id INT PRIMARY KEY AUTO_INCREMENT,
    quantidade INT CHECK (quantidade >= 0),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP --autopreenche    
);
SHOW TABLES;
DESC estoque;

CREATE TABLE livro(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    disponivel BOOLEAN DEFAULT TRUE,
    status BOOLEAN DEFAULT TRUE, 
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    img VARCHAR(255) DEFAULT 'https://cdn-icons-png.flaticon.com/512/29/29302.png'
    categoria_id INT NOT NULL,
    autor_id INT NOT NULL,
    estoque_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id),
    FOREIGN KEY (autor_id) REFERENCES autor(id),
    FOREIGN KEY (estoque_id) REFERENCES estoque(id),
    img VARCHAR(255) || DEFAULT 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
);
SHOW TABLES;
DESC livro;




--! PEDIDO (LOGICA DE NEGOCIO)

CREATE TABLE pedido(
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    data_pedido_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- +15 dias
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)

);
SHOW TABLES;
DESC pedido;

CREATE TABLE pedido_livro(
    id INT PRIMARY KEY AUTO_INCREMENT,
    quantidade INT NOT NULL,
    livro_id INT NOT NULL,
    pedido_id INT NOT NULL,
    FOREIGN KEY (livro_id) REFERENCES livro(id),
    FOREIGN KEY (pedido_id) REFERENCES pedido(id)
);

SHOW TABLES;
DESC pedido_livro;

-- id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
--================================================================================== 

-- ========================== INSERSÃO DE DADOS ===================================


INSERT INTO cliente (nome, cpf, email, telefone, rua, numero, bairro, imagem, senha, adm) VALUES
('arthur', '048048', 'joao@email.com', '1111', 'rua A', '10', 'centro', "https://img.freepik.com/vetores-gratis/avatar-de-mulher-de-estilo-plano_90220-2876.jpg?semt=ais_hybrid&w=740&q=80","senha123", true),
('carlos', '036036', 'carlos@email.com', '2222', 'rua B', '20', 'bairro B', "https://images.vexels.com/media/users/3/137047/isolated/svg/5831a17a290077c646a48c4db78a81bb.svg" ,"senha123",true),
('wesley', '040040', 'ana@email.com', '3333', 'rua C', '30', 'bairro C',"https://cdn-icons-png.flaticon.com/512/3135/3135768.png", "senha123", true),
('teste1', '080080', 'teste@email.com', '4444', 'rua D', '40', 'bairro D', "https://cdn-icons-png.flaticon.com/512/3135/3135768.png", "senha123",);
SELECT * FROM cliente;

INSERT INTO categoria (nome, img) VALUES 
('romance', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8c3w6OPR9gr4b5mDEGD7a50Jfm8VpLG-kw&s"),
('terror', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPWj09y9Z1ZwuqnB4ePF36EZ2guDiFJ9RRQ&s"),
('tecnologia' "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_rzkG9RN2OQ8xDWq5mC0PSNxO1zA6zcMSDfYUfPf-Q&s"),
('teste_delete', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJbw0PF3qdB5Oq6SsFba4bGVG7c7LYp6RCQ&s");
SELECT * FROM categoria;

INSERT INTO livro(nome, descricao, categoria_id, img) VALUES
('Livro 1', 'descricao 1', 1, "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltz8bra2fc6d9f"),
('Livro 2', 'descricao 2', 2, "https://fl-storage.bookinfometadados.com.br/uploads/book/first_cover/800_9786599174971.png"),
('Livro 3', 'descricao 3', 3, "https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg");
SELECT * FROM livro;

INSERT INTO estoque(quantidade, codigo_livro) VALUES
(10, 1),
(5, 2),
(20, 3);
SELECT * FROM estoque;

INSERT INTO pedido(cliente_id) VALUES
(1),
(2),
(3);
SELECT * FROM pedido;

INSERT INTO pedido_livro(quantidade, livro_id, pedido_id) VALUES 
(2, 1, 1),
(1, 2, 2),
(3, 3, 3);
SELECT * FROM pedido_livro;

SELECT nome FROM cliente;

SELECT * FROM categoria;

SELECT nome FROM livro
WHERE id = 3;

SELECT * FROM pedido
WHERE id = 3;

SELECT * FROM pedido_livro
WHERE id = 3;

UPDATE cliente
SET nome = 'pedro'
WHERE nome = 'teste1';
SELECT * FROM cliente;

UPDATE categoria
SET nome = 'frete'
WHERE id = 4;
SELECT * FROM categoria;

DELETE FROM categoria
WHERE nome = 'teste_delete';
SELECT * FROM categoria;

DELETE FROM cliente
WHERE id = 4;
SELECT * FROM cliente;

carlos aqui estou fazendo um committ
sdsadsadas