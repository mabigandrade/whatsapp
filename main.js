
const express = require('express');
const mysql = require('mysql2/promise');
const authRoute = require('./routes/auth.route');

const app = express();
app.use(express.json());
app.use(authRoute);

const PORT = 3000;
const SERVER= "localhost"
const MSG = `Servidor online em ${SERVER}:${PORT}`
app.listen(PORT, () => console.log(MSG));