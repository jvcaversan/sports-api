/*
  Warnings:

  - Added the required column `createdById` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matchGroupId` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "createdById" INTEGER NOT NULL,
ADD COLUMN     "matchGroupId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchGroupId_fkey" FOREIGN KEY ("matchGroupId") REFERENCES "MatchGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
