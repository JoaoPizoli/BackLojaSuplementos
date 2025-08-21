/*
  Warnings:

  - You are about to drop the `forms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "forms";

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
