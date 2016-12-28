express = require("express");
app = express();

app.get("*", function(req, res, next){
    var whoami = {};
    
    whoami.ipaddress = req.ip
    whoami.language = req.get('Accept-Language').split(',')[0]
    whoami.software = req.get('User-Agent').match(/\(([^()]*)\)/)[1]
    
    res.json(whoami);
})


var port;
port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('App listening on port: '+port)
})
