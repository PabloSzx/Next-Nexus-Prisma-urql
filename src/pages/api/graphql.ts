import { ApolloServer } from "apollo-server-micro";

import { buildContext } from "@/api/context";
import { schema } from "@/api/schema";
import { IS_DEVELOPMENT } from "@/constants";

import type { PageConfig } from "next";

const server = new ApolloServer({
  schema,
  introspection: IS_DEVELOPMENT,
  playground: IS_DEVELOPMENT && {
    settings: {
      "request.credentials": "same-origin",
      "editor.theme": "dark",
    },
  },
  tracing: IS_DEVELOPMENT,
  context: buildContext,
});

const apolloServerHandler = server.createHandler({
  path: "/api/graphql",
});

export default apolloServerHandler;

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
