-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "team1" TEXT NOT NULL,
    "team2" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Match_name_key" ON "Match"("name");
