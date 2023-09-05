const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;
const postsRoutes = require('./routes/posts/posts');
const mongoConnect = require('./utils/database').mongoConnect;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

 app.use(postsRoutes);

 mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});
