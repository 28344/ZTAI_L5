'use strict';
import express from 'express';
import config from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import routes from './REST/routes';




const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit: '2048kb'}));
app.use(express.static('public'));

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connect with database established');
  }
});
process.on('SIGINT', () => {
  mongoose.connection.close(function () {
  console.error('Mongoose default connection disconnected through app termination');
  process.exit(0);
});
});
const posts =
[
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
  "albumId": 1,
  "id": 3,
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
},
{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
},
{
  "albumId": 1,
  "id": 5,
  "title": "natus nisi omnis corporis facere molestiae rerum in",
  "url": "https://via.placeholder.com/600/f66b97",
  "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
},
{
  "albumId": 1,
  "id": 6,
  "title": "accusamus ea aliquid et amet sequi nemo",
  "url": "https://via.placeholder.com/600/56a8c2",
  "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
},
{
  "albumId": 1,
  "id": 7,
  "title": "officia delectus consequatur vero aut veniam explicabo molestias",
  "url": "https://via.placeholder.com/600/b0f7cc",
  "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
},
{
  "albumId": 1,
  "id": 8,
  "title": "aut porro officiis laborum odit ea laudantium corporis",
  "url": "https://via.placeholder.com/600/54176f",
  "thumbnailUrl": "https://via.placeholder.com/150/54176f"
},
{
  "albumId": 1,
  "id": 9,
  "title": "qui eius qui autem sed",
  "url": "https://via.placeholder.com/600/51aa97",
  "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
},
{
  "albumId": 1,
  "id": 10,
  "title": "beatae et provident et ut vel",
  "url": "https://via.placeholder.com/600/810b14",
  "thumbnailUrl": "https://via.placeholder.com/150/810b14"
},
];
app.get('/api/posts', (req, res) => {
  res.send(posts);
});
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt)
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  res.send(JSON.stringify(post));
});

routes(app);
app.listen(config.port, () => {
  console.info(`Server is running at ${config.port}`)
});
