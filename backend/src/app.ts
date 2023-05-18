import express, { Request, Response } from 'express';
const conn=require ('./database')
const cors = require("cors");

import bodyParser from 'body-parser';
const router = require("./router/router");
const app = express();
const port = 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});
app.use("/api", router);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
 