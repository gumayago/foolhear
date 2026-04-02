// ! legenda dessa pagina: Todo comentário tem caracteres especiais:

// ! CONCEITO (Vermelho)
// ? Explicação (Azul)
// TODO: inteligecia artificial (Laranja)
// * Destaque (Verde)

/* //! USUARIO Banco Dados (MySQL):
* id: AUTO_INCREMENT PRIMARY KEY, //isso é automático, não precisa colocar na hora de criar o usuário
* nome: oBRIGATORIO,
* cpf: OBRIGATORIO E UNICO,
* EMAIL; OBRIGATORIO E UNICO,
* CRIADO_EM: ja é automatico, nao precisa colocar na hora de criar o usuário    
* status: "ativo" // O admin pode desativar o usuário, mas não pode excluir, para manter o histórico de empréstimos
* categoria: "aluno" ou "professor" // O usuário pode ser aluno ou professor, mas aqui estamos definindo como 'aluno' por padrão
*/

// ! Aqui estamos criando a classe "Usuario" para representar os usuários do sistema, com as propriedades e métodos necessários para criar e apresentar um usuário. Além disso, estamos simulando a criação de um usuário e a interação com o HTML para mostrar como os dados podem ser coletados e usados para criar um novo usuário.
class Usuario {
    // * O "constructor" é onde os dados entram quando você cria o objeto
    constructor(id, nome, cpf, email, status, categoria) {
        this.id = id; //?isso é automático, não deve precisa colocar na hora de criar o usuário
        this.nome = nome;
        this.cpf = cpf; 
        this.email = email; 
        this.criado_em = new Date(); //? ja é automatico, nao precisa colocar na hora de criar o usuário, aqui estamos definindo como a data atual
        this.status = status || 'ativo'; //? Se status for fornecida, use-a; caso contrário, use 'ativo'
     // !  this.status = status ?? 'ativo';
     //? outra forma de fazer a mesma coisa.
        this.categoria = categoria || 'aluno' //? O usuário pode ser aluno ou professor, mas aqui estamos definindo como 'aluno' por padrão
    }

    //! CRIANDO um MÉTODO (uma função que pertence ao objeto)
      apresentar() {
        //? Aqui é para mostrar no terminal:
        console.log(`Olá, seja bem vindo ${this.nome}.`);
        //? Aqui retorna a string para ser usada no HTML, como em um alert tela:
        return `Olá, seja bem vindo ${this.nome}.`;
    }

}


//! criando um usuário de exemplo para testar a classe (SE ESTA RODANDO)
const usuario1 = new Usuario(null, 'Maria Silva', '123.456.789-00', 'maria.silva@email.com', null, 'aluno');
console.log(usuario1); //? MOSTRANDO o usuário no terminal (ESTA RODANDO)
console.log(usuario1.apresentar()); //? MOSTRANDO a apresentação do usuário no terminal (ESTA RODANDO)

//!IMPORTAMDO EX: biblioteca que a gente requisita/ criando a ligação/ponte com o HTML.
//! 1. Selecionando os elementos do HTML com a DOM e trazendo para o JavaScript:

// const FormLogin = document.querySelector('#Formcadastrar'); //? chamando todos os input do formulario.
const inputNome= document.getElementById('inputNome'); //? chamando os input do HTML com getElementById (id)
const inputcpf = document.getElementById('inputCpf');
const inputEmail = document.getElementById('inputEmail');
const inputCategoria = document.getElementById('inputCategoria');
const botaoEnviar = document.getElementById('btnEnviar'); 


//! 2. botão.evento de envio para criar um novo usuário quando o botão for clicado:
botaoEnviar.addEventListener('click', async() => {


  //! 3. Pega os valores atuais dos inputs que chmamos no passo 1
  const nome = inputNome.value; //?pegando os valores dos input
  const cpf = inputcpf.value;                                        
  const email = inputEmail.value;                                    
  const categoria = inputCategoria.value;   

  //!poderia ter chamado os .value direto no passo 1, mas aqui estamos criando as variáveis para deixar mais claro o processo. (simplificando para ver o processo mais claramente, no restante do código, vamos usar o valor direto do input, sem criar variáveis para isso, para deixar o código mais limpo e enxuto), ou seja, pegando o valor direto do input, sem precisar criar uma variável para isso.

//!PODERIA SER ASSIM TBM: 
  // const novoUsuario = new Usuario(inputNome.value, inputcp.value, inputEmail.value, null, inputCategoria.value); //?criando um usuário agora dentro do objeto! (sem o id e status, pois são automáticos), 
  //? Chamando direto dentro do new, mas preferi criar as variáveis para ficar mais claro o processo de pegar os dados do input e depois usar eles para criar o objeto no passo 4.

 //! 4. Instancia a classe usando as variáveis do DOM:
  const novoUsuario = new Usuario(null, nome, cpf, email, null, categoria); //?criando o usuário agora dentro do objeto!

  //!PODERIA SER ASSIM TBM: 
   const novoUsuario2 = new Usuario(nome, cpf, email, null, categoria);
  //  //?criando um usuário agora dentro do objeto! (sem o id e status, pois são automáticos), 


  //? Exemplo de uso do objeto criado //sempre fazer pra ver funcinando.
  console.log(novoUsuario);                                                   
  //?MOSTRANDO o usuário no terminal (ESTA RODANDO)
  
//TODO "AJUDA IA" Enviando para o seu servidor Node.js
//! RESUMINDO: aqui estamos usando o fetch para enviar os dados do novo usuário para o servidor Node.js, onde ele pode ser processado e armazenado no banco de dados. O método POST é usado para criar um novo recurso (neste caso, um novo usuário) no servidor. O corpo da requisição é enviado em formato JSON, que é uma forma comum de enviar dados estruturados pela web. Depois de enviar a requisição, estamos esperando a resposta do servidor e mostrando um alerta com o texto da resposta.

//! não irei criar esse segundo passo de servidor e sim enviar direto para a rota e com ela criar o usuário no banco de dados, para simplificar o processo e focar mais na criação do usuário e na interação com o HTML, sem precisar criar um servidor completo para isso.

  const resposta = await fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoUsuario) // Transforma o objeto em texto para o envio
  });

  const texto = await resposta.text();
  alert(texto);

  // 0. Limpar os campos após criar (opcional)
  inputNome.value = '';
  inputcpf.value = '';
  inputEmail.value = '';
  inputCategoria.value = '';
});

Frontend (HTML/JS): Você cria a estrutura e usa JavaScript (fetch) para capturar dados e enviá-los.
Rota/API do Serviço (BaaS): A fetch envia os dados para uma URL (ex: ://supabase.com...).
Banco de Dados: O serviço recebe, valida (através de regras pré-definidas no painel dele, não no seu código JS) e insere no banco. 
YouTube
YouTube
 +3
Ferramentas Recomendadas
Supabase / Firebase: Permitem definir "Row Level Security" (RLS) ou regras de validação no próprio banco de dados, garantindo que o front-end só insira dados válidos.
PostgREST: Se usar o Supabase, ele expõe seu banco PostgreSQL como uma REST API direta. 
YouTube
YouTube
###⚠️ RISCOS CRÍTICOS (Por que evitar isso)
Embora funcione para protótipos, não é recomendado para aplicações reais sem uma camada de servidor por segurança:
Exposição de Credenciais: As chaves de API do banco de dados ficam expostas no código-fonte do navegador ("Inspect Element").
Segurança de Dados: Se a regra de validação no BaaS for mal configurada, qualquer pessoa pode ler, alterar ou apagar seu banco de dados.
Validação do Lado do Cliente: Validação apenas no front-end é insegura, pois o usuário pode burlar o JavaScript. 
Reddit
Reddit
 +4
Resumo: Para hobbies ou projetos rápidos (MVP), use Supabase + JS. Para produção, o servidor é necessário para validar e proteger os dados.