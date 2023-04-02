/*
  Warnings:

  - The primary key for the `EmailSubscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `EmailSubscription` table. All the data in the column will be lost.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_EmailSubscription" (
    "userId" STRING NOT NULL,
    "type" "SubscriptionType" NOT NULL
);
INSERT INTO "_prisma_new_EmailSubscription" ("type","userId") SELECT "type","userId" FROM "EmailSubscription";
DROP TABLE "EmailSubscription" CASCADE;
ALTER TABLE "_prisma_new_EmailSubscription" RENAME TO "EmailSubscription";
CREATE UNIQUE INDEX "EmailSubscription_userId_type_key" ON "EmailSubscription"("userId", "type");
ALTER TABLE "EmailSubscription" ADD CONSTRAINT "EmailSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
