const express = require('express');
const router = require("./routes");
const server = express();
const morgan = require("morgan");
const cors = require("cors");

server.use(express.json());
server.use(morgan("dev"));
server.use(cors())

server.use("/", router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});