import { gql } from "apollo-server";

export const typeDefs = gql`

    type Album {
        _id: ID!,
        name: String!,
        img: String!,
        tracks: [String],
        mixes: [String],
        year: Int!
    }

    type User {
        _id: ID!,
        user: String!,
        pass: String!,
        collection: [Album]
    }

    type Query {
        test: String!
        getAlbums: [Album]
        LogIn(user: String!, pass: String!): User
        getUsers(user: String!): [User]
        getUserAlbums(user: String!): [Album]
    }

    type Mutation {
        addAlbum(user: String, pass: String, name: String!, img: String!, tracks: [String], mixes: [String], year: Int!): Album
        SignIn(user: String!, pass: String!): User
        addtoCollection(user: String!, pass: String!, name: String!): User
        deletefromCollection(user: String!, pass: String!, name: String!): User
    }
`