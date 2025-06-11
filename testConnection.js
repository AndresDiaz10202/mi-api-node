const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'admin123', // <- tu clave según pgAdmin
  database: 'mi_api',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('✅ Conexión exitosa a PostgreSQL');
    return client.end();
  })
  .catch(err => {
    console.error('❌ Error de conexión:', err);
  });
