import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

export type Context = ReturnType<typeof buildContext>;

export const buildContext = ({}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};

declare global {
  interface NexusGen {
    context: Context;
  }
}
