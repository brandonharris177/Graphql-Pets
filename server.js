const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
//models combined and exported from index
const {models, db} = require('./db')
const CORS = require("cors");

//const app = express();
const server = new ApolloServer({
  context(){
    return{models, db}
  },
  typeDefs,
  resolvers
})

//server.use(CORS());


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
  