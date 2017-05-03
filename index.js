/**
 * Arquivo para criação de um servidor local
 * utilizado para executar o código de produção.
 *
 */

var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'src')));

// redireciona todas as requições para o Angular 2
app.all('*', function(req, res) {
  res.status(200).sendFile(
  	path.join(__dirname, 'src', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node server running on port: ', app.get('port'));
});
