import express from 'express';

export const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('마지막 CI/CD');
});

app.listen(3000, () => {
  console.log('server is running!');
});
