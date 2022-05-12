/*
  Warnings:

  - You are about to drop the column `accepted` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `pending` on the `reservations` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "requests_reservationId_key";

-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "accepted",
DROP COLUMN "pending";
