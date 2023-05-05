import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import morgan from 'morgan';
import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import route from './src/router/index.js';

const port = process.env.PORT || 4000; // set back up port to 3001
const app = express();

app.use(morgan('combined')); // give us logs for each request with a lot of detail.
app.use(express.static(path.join(dirname('.'), '/public/'))); // return static files from that directory
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
route(app);

app.get('/', (req, res) => {
  res.send('running api');
});

app.listen(port, () => {
  console.info('listening on port', chalk.green(port), '!');
});
