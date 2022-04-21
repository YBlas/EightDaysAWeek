import { ApolloServer } from 'apollo-server';
import { connectMongo } from './functions';
import { Mutation } from './resolvers/mutations';
import { User, Query } from './resolvers/queries';
import { typeDefs } from './Schema';

const resolvers = {
    Query,
    Mutation,
    User
}

const run = async () => {
    const Albums = (await connectMongo()).collection("BeatlesAlbums");
    const Users = (await connectMongo()).collection("BeatlesUsers");

    const server = new ApolloServer({
        typeDefs, resolvers, context: ({ req, res }) => {
            if (req.body.query.includes("test")) {
                console.log("Hola desde el contexto porque has hecho un test");
            }
            if (req.body.query.includes("SignIn")) {

            }

            return {
                Albums,
                Users
            }
        }
    });

    server.listen(6969).then(() => console.log('Server is running on port 6969'));
}

run();