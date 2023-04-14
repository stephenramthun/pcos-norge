import { prisma } from "../client";

export const getNumberOfActiveMembers = () => {
  return prisma.user.findMany({
    where: {
      agreement: {
        status: {
          in: ["ACTIVE"],
        },
      },
    },
  });
};

export const isAdmin = async (userId: string): Promise<boolean> => {
  return prisma.adminUser
    .findUnique({
      where: {
        userId: userId,
      },
    })
    .then((user) => !!user);
};

export const getUserAgreements = () => {
  return prisma.user.findMany({
    where: {
      agreement: {
        isNot: null,
      },
    },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      agreement: {
        select: {
          id: true,
          status: true,
          start: true,
          stop: true,
          paidDate: true,
          chargeId: true,
        },
      },
    },
  });
};
