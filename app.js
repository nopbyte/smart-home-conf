var express = require('express');
var app = express();
var port = 9090;
var conf;

var separator = ":";

try {
  conf = require('./conf/my-devices');
} catch (e) {
  conf = require('./conf/devices');
}

app.get('/conf/', function (req, res) {
  if (req.query.id) {
    var ret = "delay" + separator + conf.delay + "\n";
    ret = ret + "host " + separator + conf.host + "\n";
    ret = ret + "port" + separator + conf.port + "\n";

    if (conf.devices[req.query.id]) {
      var sensors = Object.keys(conf.devices[req.query.id]);
      sensors.forEach(function (s) {
        ret = ret + s + separator + "\n";
        var configurations = Object.keys(conf.devices[req.query.id][s]);
        configurations.forEach(function (c) {
          ret = ret + "  " + c + separator + conf.devices[req.query.id][s][c] + "\n";
        });
      });
      res.send(ret);
    } else {
      res.status(404).send("");
    }
  } else {
    res.status(404).send("");
  }
});

app.listen(port, function () {
  console.log('Configuration app listening on port 3000!');
});
