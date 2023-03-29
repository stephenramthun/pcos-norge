import { prisma } from "db/prisma/client";
import { Agreement, AgreementStatus, PaymentStatus } from "@prisma/client";

export const getReservedAgreements = async (): Promise<Agreement[]> => {
  return prisma.agreement.findMany({
    where: { payment: PaymentStatus.RESERVED },
  });
};

export const getAgreement = async (id: string): Promise<Agreement | null> => {
  return prisma.agreement.findUnique({ where: { id: id } });
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
    (agreement.status === "ACTIVE" || agreement.status === "PENDING")
  );
};

export const insertAgreement = async (
  id: string,
  userId: string,
  status: AgreementStatus,
  start?: string,
  stop?: string
): Promise<Agreement> => {
  return prisma.agreement.create({
    data: {
      id,
      userId,
      status,
      start,
      stop,
    },
  });
};

export const updateAgreement = async (
  id: string,
  status: AgreementStatus,
  start?: string | null,
  stop?: string | null
): Promise<Agreement> => {
  return prisma.agreement.update({
    where: { id },
    data: { status, start, stop },
  });
};

export const updatePaymentStatus = async (
  id: string,
  payment: PaymentStatus
): Promise<Agreement> => {
  return prisma.agreement.update({
    where: { id },
    data: { payment },
  });
};

export const deleteAgreement = async (id: string): Promise<Agreement> => {
  return prisma.agreement.delete({ where: { id } });
};
