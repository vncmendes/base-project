/*
  Warnings:

  - Added the required column `product_amount` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_description` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_name` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_value` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "product_amount" TEXT NOT NULL,
ADD COLUMN     "product_description" TEXT NOT NULL,
ADD COLUMN     "product_name" TEXT NOT NULL,
ADD COLUMN     "product_value" TEXT NOT NULL;
