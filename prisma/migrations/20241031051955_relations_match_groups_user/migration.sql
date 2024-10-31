/*
  Warnings:

  - You are about to drop the `_UserGroups` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserGroups" DROP CONSTRAINT "_UserGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserGroups" DROP CONSTRAINT "_UserGroups_B_fkey";

-- DropTable
DROP TABLE "_UserGroups";

-- CreateTable
CREATE TABLE "UserMatchGroup" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "matchGroupId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "UserMatchGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMatchGroup_userId_matchGroupId_key" ON "UserMatchGroup"("userId", "matchGroupId");

-- AddForeignKey
ALTER TABLE "UserMatchGroup" ADD CONSTRAINT "UserMatchGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMatchGroup" ADD CONSTRAINT "UserMatchGroup_matchGroupId_fkey" FOREIGN KEY ("matchGroupId") REFERENCES "MatchGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
