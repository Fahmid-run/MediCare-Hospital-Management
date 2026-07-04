/*
  Warnings:

  - Made the column `phone` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Specialty_Enum" AS ENUM ('Cardiology', 'Neurology', 'Orthopedics', 'Ophthalmology', 'Pediatrics', 'Dermatology', 'Dentistry', 'ENT', 'Psychiatry', 'Oncology', 'Gynecology');

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE BIGINT;

-- CreateTable
CREATE TABLE "specialty" (
    "id" TEXT NOT NULL,
    "specialty" "Specialty_Enum" NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "specialty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialty_doctorId_key" ON "specialty"("doctorId");

-- AddForeignKey
ALTER TABLE "specialty" ADD CONSTRAINT "specialty_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
