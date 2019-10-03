import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

//Set all routes from routes folder
app.use('/', routes);

export default app;
