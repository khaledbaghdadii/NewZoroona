-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orientation" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Orientation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "location" TEXT,
    "phoneNumber" TEXT,
    "email" TEXT,
    "website" TEXT,
    "sector" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "orientationId" INTEGER NOT NULL,
    "managerId" INTEGER,
    "hasReservation" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_orientationId_fkey" FOREIGN KEY ("orientationId") REFERENCES "Orientation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
