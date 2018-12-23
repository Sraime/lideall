const express = require('express')
const app = express()
const routes = require('./app/routes')

const port = 3000
app.set('view engine', 'pug');
app.use('/dist',express.static('dist'));

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));