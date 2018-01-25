import { Meteor } from 'meteor/meteor';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import express from 'express';
import { apolloExpress } from 'apollo-server';
import { schema } from './schema';
import bodyParser from 'body-parser';

const myGraphQLSchema = schema;
const PORT = 3000;

var app = express();

app.use('/graphql', bodyParser.json(), apolloExpress({ schema: myGraphQLSchema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT);