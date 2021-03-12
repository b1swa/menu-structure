const express = require('express');
const app = express();

const menu = require("./service/menu");

app.get('/', function (req, res) {
    res.send('server is running');
  });

app.get('/v1/menus/:menu_id/sections/:section_id', function (req, res) {
    let result = menu.get(req.params.menu_id, req.params.section_id);
    res.send(result);
  });


app.listen(process.env.PORT || 5000, () => {
    console.log('Server started ...');
})