-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_managerId_fkey";

-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_placeId_fkey";

-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_reviewId_fkey";

-- AlterTable
ALTER TABLE "places" ADD COLUMN     "valid" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "requests" ALTER COLUMN "managerId" DROP NOT NULL,
ALTER COLUMN "reviewId" DROP NOT NULL,
ALTER COLUMN "placeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "valid" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "valid" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE SET NULL ON UPDATE CASCADE;
