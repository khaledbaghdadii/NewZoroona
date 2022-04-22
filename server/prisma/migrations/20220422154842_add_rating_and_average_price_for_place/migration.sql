-- AlterTable
ALTER TABLE "places" ADD COLUMN     "averagePricePerPerson" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;
