-- CreateTable
CREATE TABLE "locales" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "iso" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "content" JSONB NOT NULL,

    CONSTRAINT "locales_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "locales_iso_key" ON "locales"("iso");
