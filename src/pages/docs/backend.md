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

deployment instead of directly depolymnet use can use container and virtualization 
to solve the problem of work on my machine 
and different docker container can control using container orchertrastion

different archi also available in backend like monolithic and microservices

major apps using microservice so if one service go down other service remain independent from it
it help in debugging rather than finding bug in  whole application