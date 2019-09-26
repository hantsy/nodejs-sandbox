import app from './app';

const port = 3000;

app.listen(3000, 'localhost', () => {
  console.log(`Server running at http://localhost:$port`);
});
