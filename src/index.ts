import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { resolvers} from "./qraphql/resolvers";
import { typeDefs} from './qraphql/typeDefs';

import {listings} from './listings'
const app = express()

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const port = 3000 || process.env.port; 

const ApServer = new ApolloServer({typeDefs,resolvers});
ApServer.applyMiddleware({ app, path: "/api" });

const one = 1;
const two = 2;


app.get('/', (req, res)=>{
    res.send(`1 + 2 = ${two+one}`)
});

app.get('/listings', (req, res)=>{
    res.send(listings);
});

app.post("/delete-listing", (req, res) => {
    const {id} = req.body;

    for (let i = 0; i < listings.length; i++) 
    {
      if (listings[i].id === id) 
      {
        return res.send(listings.splice(i, 1));
      }
      else{
        return res.send("Not Found");

      }

    }
 

  });

app.get('*', (req, res)=>{
    res.send(`Not Recognized End-Point`)
});

app.listen(port)
console.log(`Server is running on port: ${port}`)