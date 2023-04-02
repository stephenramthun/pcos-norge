import { EmailDelivery } from "@prisma/client";
import { prisma } from "../client";

export class EmailDao {
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
