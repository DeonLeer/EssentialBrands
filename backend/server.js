const database = require('./database');
const apiRoutes = require('./apiRoutes');
const Express = require('express');
const App = Express();
const cors = require('cors');
const BodyParser = require('body-parser');
const PORT = 8080;
require("dotenv").config()
// Express Configuration
App.use(cors())
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
//api endpoints
const apiRouter = Express.Router();
apiRoutes(apiRouter, database);
App.post('/payment', async (req, res) => {
  const data = req.body;
  let total = 0;
  for (let item in data) {
		if (data[item].fiveg) {
			total =
				total +
				data[item][data[item].size] * data[item].quantity;
		} else {
			total = total + data[item].cost * data[item].quantity;
		}
	}
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total*100,
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  })
})
App.use('/api', apiRouter)

App.listen((process.env['PORT'] || PORT), (err) => console.log(err || `listening on port ${PORT}`))
