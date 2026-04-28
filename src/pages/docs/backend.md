//starting of backend
//client->server->middleware->route->DB->response


sends Post request to the backend and bcrypt used for encryption

JWT token (or session ID) if password matches


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connect("mongodb://localhost:27017/chatApp")
for cloud database

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
