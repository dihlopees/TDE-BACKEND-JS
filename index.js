const app = require('./server');

const port = 8070;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
