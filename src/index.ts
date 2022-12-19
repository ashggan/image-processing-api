import express from 'express';
import Router from './routes';

const app = express();

app.use(Router);

app.use(
  (req: express.Request, res: express.Response) =>
    res.status(404).json({ error: 'not Found' })
);

//listen to server at port 5000
const port = process.env.port || 5000;
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

export default app;
