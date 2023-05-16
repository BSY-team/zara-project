import express, { Request, Response } from 'express';

import bodyParser from 'body-parser';
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());




app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
