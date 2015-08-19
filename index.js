var express = require('express'),
    expressStatsd = require('express-statsd'),
    morgan = require('morgan')

var app = express();

app.use(
    expressStatsd({
        requestKey: "hello_world",
        host: (process.env.STATSD_SERVER || "127.0.0.1"),
        port: (process.env.STATSD_PORT || 8125)
    }),
    morgan('combined')
);

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send("Hello World!\n");
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
