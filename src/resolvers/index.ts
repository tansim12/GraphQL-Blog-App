const userData = [
  {
    name: "name",
    email: "a@gmail.com",
  },
];
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    user: () => userData,
  },
  Mutation: {
    signup: async (parent: any, args: any, context: any) => {
      console.log(args);

      return await prisma.user.create({
        data: args,
      });
    },
  },
};
