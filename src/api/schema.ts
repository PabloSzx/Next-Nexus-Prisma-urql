import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import { resolve } from "path";

import * as types from "@/api/resolvers";
import { IS_DEVELOPMENT, PWD } from "@/constants";
import { makeSchema } from "@nexus/schema";

const prismaPlugin = nexusSchemaPrisma({
  experimentalCRUD: true,
  outputs: {
    typegen: resolve(PWD, "./src/api/generated/prismaTypings.d.ts"),
  },
  shouldGenerateArtifacts: IS_DEVELOPMENT,
});

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: IS_DEVELOPMENT,
  outputs: {
    schema: resolve(PWD, "./schema.gql"),
    typegen: resolve(PWD, "./src/api/generated/typings.d.ts"),
  },
  plugins: [prismaPlugin],
  prettierConfig: {},
});
