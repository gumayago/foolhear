// javascript
class usuario {
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
    exibirLivro() {
        return (this.id, this.nome, this.descricao, this.disponivel)
    }
}
