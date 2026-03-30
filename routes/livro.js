const x = ("Mensagem externa");

// rota MOSTRAR livro id:
app.get('/livro', (req, res) => {
  res.send('<h1> produto:id </h1>');
  res.send(x);
});

// rota CRIAR livro id:
app.post('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

// rota EDITAR/UPDATE livros id:
app.put('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

// rota DELETAR livros id:
app.delete('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});
