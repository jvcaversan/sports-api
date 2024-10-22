/*
  Warnings:

  - You are about to drop the `matchGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "matchGroup";

-- CreateTable
CREATE TABLE "MatchGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MatchGroup_pkey" PRIMARY KEY ("id")
);
