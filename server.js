//Server file

//Importing express
const express = require('express');
const apiRouter = require('./routes/APIRoutes');
const htmlRouter = require('./routes/htmlRoute')

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Setting up my routes 
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

