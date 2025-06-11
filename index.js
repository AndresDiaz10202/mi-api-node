require('dotenv').config();

const express = require('express');
const app = express();
const userRoutes = require('./api/routes/user.routes');

app.use(express.json()); // ¡Importante para leer JSON!
app.use('/api/users', userRoutes); // <-- Esta línea conecta el router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
