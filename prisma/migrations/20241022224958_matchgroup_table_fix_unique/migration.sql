/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `MatchGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MatchGroup_name_key" ON "MatchGroup"("name");
