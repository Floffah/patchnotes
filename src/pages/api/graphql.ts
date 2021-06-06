import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import { APISchema } from "../../lib/api/schema";
import { executor } from "../../lib/api/jit";

const db = new PrismaClient();

const apollo = new ApolloServer({
    schema: APISchema,
    executor: executor(APISchema),
    playground: true,
    introspection: true,
    tracing: true,
    context: async () => ({
        db,
    }),
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apollo.createHandler({ path: "/api/graphql" });
