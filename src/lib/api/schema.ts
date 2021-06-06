import { PrismaClient } from "@prisma/client";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { NoteFields } from "./schema/notes";

export const APISchema = new GraphQLSchema({
    query: new GraphQLObjectType<any, SchemaContext>({
        name: "Query",
        description: "Root query",
        fields: {
            ping: {
                description: "For checking api latency",
                type: GraphQLString,
                resolve: () => "pong",
            },
            ...NoteFields,
        },
    }),
});

export interface SchemaContext {
    db: PrismaClient;
}
