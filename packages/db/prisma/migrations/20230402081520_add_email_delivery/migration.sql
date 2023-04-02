-- CreateTable
CREATE TABLE "EmailDelivery" (
    "userId" STRING NOT NULL,
    "emailId" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailDelivery_userId_emailId_key" ON "EmailDelivery"("userId", "emailId");

-- AddForeignKey
ALTER TABLE "EmailDelivery" ADD CONSTRAINT "EmailDelivery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
