import { prisma } from "./prisma/client";
import {
  Agreement,
  AgreementStatus,
  EmailSubscription,
  SubscriptionType,
} from "@prisma/client";

export { prisma, AgreementStatus, SubscriptionType };
export type { Agreement, EmailSubscription };
