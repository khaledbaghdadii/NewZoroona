-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "accepted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "processed" BOOLEAN NOT NULL DEFAULT false;
