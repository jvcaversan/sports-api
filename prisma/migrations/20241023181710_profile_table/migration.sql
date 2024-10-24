-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "phone" TEXT,
    "position" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
