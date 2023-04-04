const express = require('express');
const app = express();
const cors = require('cors');
const mainRouter = require('./router/main');

app.use(cors());
app.use(express.json());

// VISI REQUESTAI KURIE ATEINA I APPĄ NUKREIPIAMI Į MAIN ROUTER.
app.use('/', mainRouter);

// GET USER OBJECT DATA FROM SERVER CONSOLE LOG AND SEND BACK ANSWER OK.
// let user = [];
// app.post('/register', (req, res) => {
//   console.log(req.body);
//   res.send({ ok: 'ok' });
// });

app.listen(3600);
