/*
  Warnings:

  - Added the required column `chargeId` to the `Agreement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agreement" ADD COLUMN     "chargeId" STRING NOT NULL;
