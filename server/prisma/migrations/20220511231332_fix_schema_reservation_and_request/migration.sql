/*
  Warnings:

  - You are about to drop the column `processed` on the `reservations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reservationId]` on the table `requests` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "processed",
ADD COLUMN     "pending" BOOLEAN DEFAULT false,
ALTER COLUMN "accepted" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "requests_reservationId_key" ON "requests"("reservationId");
