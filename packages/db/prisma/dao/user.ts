import { prisma } from "db/prisma/client";
import { User } from "@prisma/client";

export const getUser = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id: id } });
};
