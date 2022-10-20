-- CreateTable
CREATE TABLE "Member" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "givenName" STRING NOT NULL,
    "familyName" STRING NOT NULL,
    "middleName" STRING,
    "email" STRING NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
