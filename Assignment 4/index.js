const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogs');

const app = express();
app.use(cors());
app.use(express.json);
app.use('./blogs',blogRoutes);

app.get('/', (req, res) => {
  res.send('Blog Backend Sever Running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});