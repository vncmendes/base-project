/*
  Warnings:

  - The primary key for the `orders-products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `orders-products` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `orders-products` table. All the data in the column will be lost.
  - You are about to drop the column `product_amount` on the `orders-products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order_id]` on the table `orders-products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_id]` on the table `orders-products` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "orders-products" DROP CONSTRAINT "orders-products_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "product_amount";

-- CreateIndex
CREATE UNIQUE INDEX "orders-products_order_id_key" ON "orders-products"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "orders-products_product_id_key" ON "orders-products"("product_id");
