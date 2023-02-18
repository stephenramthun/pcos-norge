/*
  Warnings:

  - Added the required column `status` to the `Agreement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AgreementStatus" AS ENUM ('ACTIVE', 'PENDING', 'EXPIRED', 'STOPPED');

-- AlterTable
ALTER TABLE "Agreement" ADD COLUMN     "status" "AgreementStatus" NOT NULL;
