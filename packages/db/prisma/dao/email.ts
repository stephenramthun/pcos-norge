import { EmailDelivery, SubscriptionType } from "@prisma/client";
import { prisma } from "../client";

export class EmailDao {
  subscribe = async (
    userId: string,
    ...types: SubscriptionType[]
  ): Promise<void> => {
    await prisma.emailSubscription.createMany({
      data: types.map((it) => ({ userId, type: it })),
    });
  };

  getSubscriptions = async (userId: string): Promise<SubscriptionType[]> => {
    const subscriptions = await prisma.emailSubscription.findMany({
      where: { userId },
    });

    return subscriptions.map((it) => it.type);
  };

  removeSubscriptions = async (userId: string): Promise<number> => {
    const { count } = await prisma.emailSubscription.deleteMany({
      where: { userId },
    });

    return count;
  };

  setAsSent = async (
    userId: string,
    emailId: string
  ): Promise<EmailDelivery | void> => {
    if (!this.hasSentEmail(userId, emailId)) {
      return prisma.emailDelivery.create({ data: { userId, emailId } });
    }
  };

  hasSentEmail = async (userId: string, emailId: string): Promise<boolean> => {
    const hasSent = await prisma.emailDelivery.findUnique({
      where: { userId_emailId: { userId, emailId } },
    });

    return hasSent !== null && hasSent !== undefined;
  };
}
