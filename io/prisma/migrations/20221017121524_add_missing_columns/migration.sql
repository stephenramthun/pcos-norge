/*
  Warnings:

  - You are about to drop the column `middleName` on the `Member` table. All the data in the column will be lost.
  - Added the required column `address` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "middleName";
ALTER TABLE "Member" ADD COLUMN     "address" STRING NOT NULL;
ALTER TABLE "Member" ADD COLUMN     "city" STRING NOT NULL;
ALTER TABLE "Member" ADD COLUMN     "postalCode" STRING NOT NULL;
