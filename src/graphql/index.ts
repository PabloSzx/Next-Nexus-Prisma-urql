import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Post = {
  authorId: Scalars["Int"];
  id: Scalars["Int"];
};

export type Query = {
  asd: Scalars["String"];
};

export type AsdQueryVariables = Exact<{ [key: string]: never }>;

export type AsdQuery = Pick<Query, "asd">;

export const AsdDocument = gql`
  query asd {
    asd
  }
`;

export function useAsdQuery(
  options: Omit<Urql.UseQueryArgs<AsdQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<AsdQuery>({ query: AsdDocument, ...options });
}
