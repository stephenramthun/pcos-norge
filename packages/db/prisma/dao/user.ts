import { prisma } from "db/prisma/client";
import { User } from "@prisma/client";

type UserInfo = {
  email: string;
  givenName: string;
  familyName: string;
  phoneNumber: string;
  region: string;
  postalCode: string;
  streetAddress: string;
};

export const updateUser = (userId: string, data: UserInfo): Promise<User> => {
  return prisma.user.update({
    data: { ...data, name: `${data.givenName} ${data.familyName}` },
    where: { id: userId },
  });
};

export const getUserInfo = async (userId: string): Promise<UserInfo | null> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return (
    user && {
      email: user.email,
      givenName: user.givenName,
      familyName: user.familyName,
      phoneNumber: user.phoneNumber,
      region: user.region,
      postalCode: user.postalCode,
      streetAddress: user.streetAddress,
    }
  );
};
