import express, { ErrorRequestHandler, NextFunction } from 'express';
import Router from './routes';
// import errorhandle from './middlewares/errorhandle';

const app = express();
app.use(Router);

// error, request, response, next;
app.get('/error', (req, res) => {
  // throw an error with status code of 400
  let error = {
    message: `processing error in request at ${req.baseUrl}`,
    statusCode: 404,
  };
  res.status(404).send({ error });
});

// Error handling middleware
// app.use(errorhandle.errorhandle());

//listen to server at port 8000
const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
