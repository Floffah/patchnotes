import {
    GraphQLFieldConfigMap,
    GraphQLList,
    GraphQLNonNull,
} from "graphql/type/definition";
import { SchemaContext } from "../schema";
import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { UserInputError } from "apollo-server-micro";
import { Page } from "./pagination";

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
    recentNote: {
        description: "Get the most recent id of note",
        type: GraphQLInt,
        resolve: async (_s, _a, c) => {
            const max = await c.db.patchNote.aggregate({
                _max: {
                    id: true,
                },
            });

            return max._max.id;
        },
    },
    notes: {
        description: "All notes (uses cursor pagination)",
        type: Page(PatchNote),
        args: {
            first: { type: GraphQLInt, defaultValue: 5 },
            afterCursor: { type: GraphQLInt },
        },
        resolve: async (_s, a, c) => {
            const notes = await c.db.patchNote.findMany({
                take: a.first ?? 5,
                cursor: a.afterCursor
                    ? {
                          id: a.afterCursor ?? 0,
                      }
                    : undefined,
                orderBy: {
                    createdAt: "desc",
                },
                select: {
                    tags: true,
                    version: true,
                    id: true,
                    body: true,
                    name: true,
                },
            });
            const total = await c.db.patchNote.count({
                select: {
                    _all: true,
                },
            });
            const edges = notes.map((node) => ({ node, cursor: node.id }));

            let startCursor,
                endCursor = null;
            let hasNextPage = false;

            if (edges.length > 0) {
                startCursor = edges[0].node.id;
                endCursor = edges[edges.length - 1].node.id;

                const beforeMin = await c.db.patchNote.count({
                    where: {
                        id: {
                            lt: startCursor,
                        },
                    },
                });

                hasNextPage = total._all > beforeMin + 1;
            }

            return {
                totalCount: total._all,
                edges,
                pageInfo: {
                    startCursor,
                    endCursor,
                    hasNextPage,
                },
            };
        },
    },
};
