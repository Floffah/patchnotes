import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const APISchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "Root query",
        fields: {
            ping: {
                description: "For checking api latency",
                type: GraphQLString,
                resolve: () => "pong",
            },
        },
    }),
});
