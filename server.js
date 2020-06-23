const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
    description: 'Products',
  };

  console.log(req.body);

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeRes });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
app.post('/api/form', (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Detials</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message<h3>
    <p>${req.body.message}</p>
`;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL,
      replyTo: req.body.email,
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log('Message sent: %s', info.message);
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
