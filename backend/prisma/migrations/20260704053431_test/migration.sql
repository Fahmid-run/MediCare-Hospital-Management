/*
  Warnings:

  - The values [User,Admin,Author] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `active_status` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `bugs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "Appointment_Status" AS ENUM ('Pending', 'Confirmed', 'Completed', 'Cancelled');

-- CreateEnum
CREATE TYPE "Payment_Status" AS ENUM ('Pending', 'Done');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('PATIENT', 'DOCTOR', 'ADMIN');
ALTER TABLE "public"."users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'PATIENT';
COMMIT;

-- DropForeignKey
ALTER TABLE "bugs" DROP CONSTRAINT "bugs_authorId_fkey";

-- DropForeignKey
ALTER TABLE "bugs" DROP CONSTRAINT "bugs_projectId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_authorId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "active_status",
ADD COLUMN     "phone" INTEGER,
ALTER COLUMN "role" SET DEFAULT 'PATIENT';

-- DropTable
DROP TABLE "bugs";

-- DropTable
DROP TABLE "projects";

-- DropEnum
DROP TYPE "Bug_Priority";

-- DropEnum
DROP TYPE "Bug_Status";

-- CreateTable
CREATE TABLE "appointment" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "timeSlot" TIMESTAMP(3) NOT NULL,
    "status" "Appointment_Status" NOT NULL DEFAULT 'Pending',
    "reason" VARCHAR(200) NOT NULL,
    "paymentStatus" "Payment_Status" NOT NULL DEFAULT 'Pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availability" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors" (
    "id" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "hospital" TEXT NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "consultationFee" INTEGER NOT NULL,
    "bio" VARCHAR(200) NOT NULL,
    "rating" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "status" "Payment_Status" NOT NULL DEFAULT 'Pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "message" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'Male',
    "bloodGroup" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prescription" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "appointment_doctorId_key" ON "appointment"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "appointment_patientId_key" ON "appointment"("patientId");

-- CreateIndex
CREATE INDEX "appointment_patientId_idx" ON "appointment"("patientId");

-- CreateIndex
CREATE INDEX "appointment_doctorId_idx" ON "appointment"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "availability_doctorId_key" ON "availability"("doctorId");

-- CreateIndex
CREATE INDEX "availability_doctorId_idx" ON "availability"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_userId_key" ON "doctors"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_appointmentId_key" ON "invoice"("appointmentId");

-- CreateIndex
CREATE INDEX "invoice_appointmentId_idx" ON "invoice"("appointmentId");

-- CreateIndex
CREATE INDEX "notification_userId_idx" ON "notification"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "patients_userId_key" ON "patients"("userId");

-- CreateIndex
CREATE INDEX "patients_userId_idx" ON "patients"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "prescription_patientId_key" ON "prescription"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "prescription_doctorId_key" ON "prescription"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "prescription_appointmentId_key" ON "prescription"("appointmentId");

-- CreateIndex
CREATE INDEX "prescription_patientId_idx" ON "prescription"("patientId");

-- CreateIndex
CREATE INDEX "prescription_doctorId_idx" ON "prescription"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_doctorId_key" ON "reviews"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_patientId_key" ON "reviews"("patientId");

-- CreateIndex
CREATE INDEX "reviews_doctorId_idx" ON "reviews"("doctorId");

-- CreateIndex
CREATE INDEX "reviews_patientId_idx" ON "reviews"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availability" ADD CONSTRAINT "availability_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescription" ADD CONSTRAINT "prescription_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescription" ADD CONSTRAINT "prescription_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescription" ADD CONSTRAINT "prescription_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
