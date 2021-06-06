import {
    GraphQLFieldConfigMap,
    GraphQLList,
    GraphQLNonNull,
} from "graphql/type/definition";
import { SchemaContext } from "../schema";
import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { UserInputError } from "apollo-server-micro";

export const Tag = new GraphQLObjectType({
    name: "Tag",
    description: "Patch note tag",
    fields: {
        name: {
            description: "Tag name",
            type: GraphQLString,
        },
    },
});

export const PatchNote = new GraphQLObjectType({
    name: "PatchNote",
    description: "GraphQL object representing a patch note",
    fields: {
        id: {
            description: "Patch note id",
            type: GraphQLInt,
        },
        version: {
            description: "Patch note version",
            type: GraphQLString,
        },
        name: {
            description: "Patch note name",
            type: GraphQLString,
        },
        body: {
            description: "Patch note body",
            type: GraphQLString,
        },
        tags: {
            description: "Patch note tags",
            type: GraphQLList(Tag),
        },
    },
});

export const NoteFields: GraphQLFieldConfigMap<any, SchemaContext> = {
    getNote: {
        description: "Fetch a note",
        args: {
            id: {
                type: GraphQLNonNull(GraphQLInt),
                description: "The patch note ID",
            },
        },
        type: PatchNote,
        resolve: async (_s, a, c) => {
            if (!a.id) throw new UserInputError("Must provide id argument");

            const note = await c.db.patchNote.findFirst({
                where: {
                    id: a.id,
                },
            });

            if (!note)
                throw new UserInputError(
                    "No note matching the provided id was found",
                );

            return note;
        },
    },
};
