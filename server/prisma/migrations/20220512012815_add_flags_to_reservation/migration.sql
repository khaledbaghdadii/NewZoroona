-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "accepted" BOOLEAN DEFAULT false,
ADD COLUMN     "pending" BOOLEAN DEFAULT true;
