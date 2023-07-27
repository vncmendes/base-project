/*
  Warnings:

  - You are about to drop the column `product_description` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `product_value` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "product_description",
DROP COLUMN "product_value";
