import express from 'express';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';

import router from './router';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
}));

app.set('view engine', '.hbs');

app.use(express.static(`${__dirname}/../public`));
app.use(router);

app.listen(port);
// eslint-disable-next-line
console.log(`Listening on port: ${port}`);
