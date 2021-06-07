import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLOutputType,
} from "graphql";
import { GraphQLList } from "graphql/type/definition";

export const Edge = (type: GraphQLOutputType) =>
    new GraphQLObjectType({
        name: "Edge",
        fields: {
            node: { type },
            cursor: { type: GraphQLInt },
        },
    });

export const PageInfo = new GraphQLObjectType({
    name: "PageInfo",
    fields: {
        startCursor: { type: GraphQLInt },
        endCursor: { type: GraphQLInt },
        hasNextPage: { type: GraphQLBoolean },
    },
});

export const Page = (type: GraphQLOutputType) =>
    new GraphQLObjectType({
        name: "Page",
        fields: {
            totalCount: { type: GraphQLInt },
            edges: { type: GraphQLList(Edge(type)) },
            pageInfo: { type: PageInfo },
        },
    });
