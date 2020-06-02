const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/film', require('./routes/api/film'))

app.post('/api/film/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'GBP'
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      return res.redirect('/');
      res.status(200).send({ success: stripeRes });
      
      //<Redirect to="/routes/api/film"/> 
    }
    
    //res.set('location', 'https://localhost:3000/');
   //response.status(301).send()
    //res.redirect('/routes/api/film');
    //successRedirect : '/'
  });
})