import { objectType, queryType } from "@nexus/schema";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.authorId();
  },
});

export const Query = queryType({
  definition(t) {
    t.crud.post();
    t.string("asd", {
      resolve() {
        return "hello world";
      },
    });
  },
});
