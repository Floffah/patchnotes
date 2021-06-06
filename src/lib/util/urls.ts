import { isDev } from "./dev";

export const APIUrl = isDev
    ? "http://localhost:3000/api/graphql"
    : "https://patchnotes.floffah.dev/api/graphql";
