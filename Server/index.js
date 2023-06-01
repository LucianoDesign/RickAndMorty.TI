const http = require("http");
const getCharById = require("./controllers/getCharById");

const PORT = 3001;
const server = http.createServer((req, res)=> {
  const { url } = req;
  console.log(`Server raised in port ${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes("/rickandmorty/character") ) {
        const id = url.split("/").pop();
        getCharById(res, id)
    }
        
    }).listen(PORT, "localhost") ;
    
    module.exports = server;