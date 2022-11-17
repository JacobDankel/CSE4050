'use strict';

var cse4050models = require('./app/models/kanbanApp.js').cse4050models;

app.use(express.static(__dirname));

app.get('/api/tasks', function (request, response) {
  response.status(200).send(cse4050models.taskListModel());
  return;
});

app.get('/api/task-types', function (request, response) {
  response.status(200).send(cse4050models.taskTypeListModel());
  return;
});

var server = app.listen(portno, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});
