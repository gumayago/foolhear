
// rota p/ MOSTRAR usuarios:
app.get('/usuario', (req, res) => {
  res.send('<h1> perfil </h1>')
});

// rota CRIAR usuario id:
app.post('/usuario', (req, res) => {
  res.send('<h1> perfil </h1>')
});

// rota EDITAR/UPDATE usuario id:
app.put('/usuario', (req, res) => {
  res.send('<h1> perfil </h1>')
});

// rota DELETAR livros id: AQUI A IDEIA É QUE APENAS O ADM POSSA DELETAR/TORNAR INATIVO
app.delete('/usuario', (req, res) => {
  res.send('<h1> perfil </h1>')
});
