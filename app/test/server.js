var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
server.get('/api/map', function (req, res) {
  res.json([
    {
      "first_name":"Test1","last_name":"User","user_id":"3DAN9OGVLY05",
      "edx_username":"test1","student_number":"12345678","email":"test1@ubc.ca"
    },
    {
      "first_name":"Test2","last_name":"User","user_id":"3DAN9OGVLY06",
      "edx_username":"test2","student_number":"12345679","email":"test2@ubc.ca"
    }
  ]);
});

// Returns an Express router
//var router = jsonServer.router('db.json');
//server.use(router);

server.listen(8080);
