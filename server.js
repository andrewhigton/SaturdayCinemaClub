const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/film', require('./routes/api/film'))
// app.use('/api/film', require('./routes/api/film/edit'))
//app.use('/api/posts', require('./routes/api/posts'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));