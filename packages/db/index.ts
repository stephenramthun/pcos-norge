import { prisma } from "./prisma/client";
import { Agreement, AgreementStatus } from "@prisma/client";

export { prisma, AgreementStatus };
export type { Agreement };
