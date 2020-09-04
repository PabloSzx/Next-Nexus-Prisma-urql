import * as Typegen from "nexus-plugin-prisma/typegen";
import * as Prisma from "@prisma/client";

// Pagination type
type Pagination = {
  first?: boolean;
  last?: boolean;
  before?: boolean;
  after?: boolean;
};

// Prisma custom scalar names
type CustomScalars = "DateTime";

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User;
  Profile: Prisma.Profile;
  Post: Prisma.Post;
  Category: Prisma.Category;
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering:
        | "AND"
        | "OR"
        | "NOT"
        | "id"
        | "email"
        | "name"
        | "role"
        | "posts"
        | "profile";
      ordering: "id" | "email" | "name" | "role";
    };
    profiles: {
      filtering: "AND" | "OR" | "NOT" | "id" | "bio" | "user" | "userId";
      ordering: "id" | "bio" | "userId";
    };
    posts: {
      filtering:
        | "AND"
        | "OR"
        | "NOT"
        | "id"
        | "createdAt"
        | "title"
        | "published"
        | "author"
        | "authorId"
        | "categories";
      ordering: "id" | "createdAt" | "title" | "published" | "authorId";
    };
    categories: {
      filtering: "AND" | "OR" | "NOT" | "id" | "name" | "posts";
      ordering: "id" | "name";
    };
  };
  User: {
    posts: {
      filtering:
        | "AND"
        | "OR"
        | "NOT"
        | "id"
        | "createdAt"
        | "title"
        | "published"
        | "author"
        | "authorId"
        | "categories";
      ordering: "id" | "createdAt" | "title" | "published" | "authorId";
    };
  };
  Profile: {};
  Post: {
    categories: {
      filtering: "AND" | "OR" | "NOT" | "id" | "name" | "posts";
      ordering: "id" | "name";
    };
  };
  Category: {
    posts: {
      filtering:
        | "AND"
        | "OR"
        | "NOT"
        | "id"
        | "createdAt"
        | "title"
        | "published"
        | "author"
        | "authorId"
        | "categories";
      ordering: "id" | "createdAt" | "title" | "published" | "authorId";
    };
  };
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: "User";
    users: "User";
    profile: "Profile";
    profiles: "Profile";
    post: "Post";
    posts: "Post";
    category: "Category";
    categories: "Category";
  };
  Mutation: {
    createOneUser: "User";
    updateOneUser: "User";
    updateManyUser: "BatchPayload";
    deleteOneUser: "User";
    deleteManyUser: "BatchPayload";
    upsertOneUser: "User";
    createOneProfile: "Profile";
    updateOneProfile: "Profile";
    updateManyProfile: "BatchPayload";
    deleteOneProfile: "Profile";
    deleteManyProfile: "BatchPayload";
    upsertOneProfile: "Profile";
    createOnePost: "Post";
    updateOnePost: "Post";
    updateManyPost: "BatchPayload";
    deleteOnePost: "Post";
    deleteManyPost: "BatchPayload";
    upsertOnePost: "Post";
    createOneCategory: "Category";
    updateOneCategory: "Category";
    updateManyCategory: "BatchPayload";
    deleteOneCategory: "Category";
    deleteManyCategory: "BatchPayload";
    upsertOneCategory: "Category";
  };
  User: {
    id: "Int";
    email: "String";
    name: "String";
    role: "Role";
    posts: "Post";
    profile: "Profile";
  };
  Profile: {
    id: "Int";
    bio: "String";
    user: "User";
    userId: "Int";
  };
  Post: {
    id: "Int";
    createdAt: "DateTime";
    title: "String";
    published: "Boolean";
    author: "User";
    authorId: "Int";
    categories: "Category";
  };
  Category: {
    id: "Int";
    name: "String";
    posts: "Post";
  };
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<"User">;
  Profile: Typegen.NexusPrismaFields<"Profile">;
  Post: Typegen.NexusPrismaFields<"Post">;
  Category: Typegen.NexusPrismaFields<"Category">;
  Query: Typegen.NexusPrismaFields<"Query">;
  Mutation: Typegen.NexusPrismaFields<"Mutation">;
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs;
  outputs: NexusPrismaOutputs;
  methods: NexusPrismaMethods;
  models: PrismaModels;
  pagination: Pagination;
  scalars: CustomScalars;
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends "model" | "crud"
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
