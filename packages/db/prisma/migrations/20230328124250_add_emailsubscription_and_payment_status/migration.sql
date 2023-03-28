-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('RESERVED', 'CHARGED');

-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('NYHETSBREV');

-- AlterTable
ALTER TABLE "Agreement" ADD COLUMN     "payment" "PaymentStatus" NOT NULL DEFAULT 'RESERVED';

-- CreateTable
CREATE TABLE "EmailSubscription" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "type" "SubscriptionType" NOT NULL,

    CONSTRAINT "EmailSubscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmailSubscription" ADD CONSTRAINT "EmailSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
