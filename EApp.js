const express = require('express')
const app = express();
const port = 5000;
app.get("/", (req, res) => {
    res.sendFile('/MyprojBT4.html',{root:__dirname});
 });
app.get('/', (req, res) => {
res.sendFile('/search.html', { root: __dirname });
});

app.listen(port, () => {
    console.log("Express server listning on port " + port);
  });  
 
  
  
  