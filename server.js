let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.send('halo ini express js');
});
app.get('/users/:name',function(req, res){
    res.send('namanya adalah ' + req.params.name);
});
app.listen(3000);

console.log("server running on http://localhost:3000");