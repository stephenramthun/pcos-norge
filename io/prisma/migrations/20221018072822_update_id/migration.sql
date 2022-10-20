/*
  Warnings:

  - You are about to alter the column `id` on the `Member` table. The data in that column will be cast from `Int` to `BigInt`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Member" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "givenName" STRING NOT NULL,
    "familyName" STRING NOT NULL,
    "email" STRING NOT NULL,
    "postalCode" STRING NOT NULL,
    "address" STRING NOT NULL,
    "city" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Member" ("address","city","createdAt","email","familyName","givenName","id","postalCode") SELECT "address","city","createdAt","email","familyName","givenName","id","postalCode" FROM "Member";
DROP TABLE "Member" CASCADE;
ALTER TABLE "_prisma_new_Member" RENAME TO "Member";
