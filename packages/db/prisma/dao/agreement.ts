import { prisma } from "db/prisma/client";
import { Agreement, AgreementStatus } from "@prisma/client";

export const getUnpaidAgreements = async (): Promise<Agreement[]> => {
  return prisma.agreement.findMany({
    where: { status: AgreementStatus.ACTIVE, paidDate: undefined },
  });
};

export const getPendingAgreements = async (): Promise<Agreement[]> => {
  return prisma.agreement.findMany({
    where: { status: AgreementStatus.PENDING },
  });
};

export const getAgreementForUser = async (
  id: string
): Promise<Agreement | null> => {
  const result = (await prisma.user.findUnique({
    where: { id: id },
    select: { agreement: true },
  })) ?? { agreement: null };

  return result.agreement;
};

export const hasActiveOrPendingAgreement = async (
  userId: string
): Promise<boolean> => {
  const agreement = await getAgreementForUser(userId);
  return (
    agreement !== null &&
    (agreement.status === "ACTIVE" ||
      agreement.status === "PENDING" ||
      agreement.status === "UPDATING")
  );
};

export const insertAgreement = async (
  id: string,
  userId: string,
  status: AgreementStatus,
  chargeId: string,
  start?: string,
  stop?: string
): Promise<Agreement> => {
  return prisma.agreement.upsert({
    where: { userId },
    update: {
      id,
      status,
      chargeId,
      start,
      stop,
    },
    create: {
      id,
      userId,
      status,
      chargeId,
      start,
      stop,
    },
  });
};

export const updateAgreement = async (
  id: string,
  status: AgreementStatus,
  start?: string | null,
  stop?: string | null,
  paidDate?: Date | null
): Promise<Agreement> => {
  return prisma.agreement.update({
    where: { id },
    data: { status, start, stop, paidDate },
  });
};

export const updatePaidDate = async (
  id: string,
  date = new Date()
): Promise<Agreement> => {
  return prisma.agreement.update({
    where: { id },
    data: { paidDate: date },
  });
};

// Sletter ikke avtale, men setter den heller til stopped
export const deleteAgreement = async (id: string): Promise<Agreement> => {
  return prisma.agreement.update({
    where: { id },
    data: { status: "STOPPED" },
  });
  // return prisma.agreement.delete({ where: { id } });
};
