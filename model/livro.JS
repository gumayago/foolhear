// javascript
class livro {
    // O "constructor" é onde os dados entram quando você cria o objeto
    constructor(id, nome, descricao, disponivel, status, preco, categoria) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao || 'Sem descrição'; // Se descricao for fornecida, use-a; caso contrário, use 'Sem descrição'
     //   this.descricao = descricao ?? 'Sem descrição'; // Se descricao for fornecida e não for null ou undefined, use-a; caso contrário, use 'Sem descrição'
        this.disponivel = disponivel;
        this.status = status;
        this.preco = preco;
        this.categoria = categoria; 
    }

    // Isso é um MÉTODODO (uma função que pertence ao objeto)
    exibirTotal() {
        return (this.preco * this.qtd) + this.frete;
    }
}

    id PRIMARY KEY AUTO_INCREMENT, //isso é automático, não precisa colocar na hora de criar o livro
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    disponivel BOOLEAN  DEFAULT 'ativo',
    status BOOLEAN DEFAULT 'ativo',
    -- preco DECIMAL(9,2) NOT NULL, substitui por disponivel/status
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP // ja é automatico, nao precisa colocar na hora de criar o livro
    categoria_id INT NOT NULL,
    