import express from 'express';
import Router from './routes';

const app = express();

app.use(Router);

//listen to server at port 5000
const port = process.env.port || 5000;
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

export default app;
