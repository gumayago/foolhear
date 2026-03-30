// alert;
app.get('/1', (req, res) => {
    // --- ESTE É O SEU "ALERT" ---
    console.log('✅ A rota principal foi acessada!');                
    // -----------------------------
    res.send('API Funcionando!');
});

