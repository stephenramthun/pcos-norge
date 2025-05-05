-- CreateTable
CREATE TABLE "PaymentHistory" (
    "userId" STRING NOT NULL,
    "chargeId" STRING NOT NULL,
    "data" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentHistory_userId_chargeId_key" ON "PaymentHistory"("userId", "chargeId");

-- AddForeignKey
ALTER TABLE "PaymentHistory" ADD CONSTRAINT "PaymentHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
