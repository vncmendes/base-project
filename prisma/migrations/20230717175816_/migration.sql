/*
  Warnings:

  - You are about to drop the `order-products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order-products" DROP CONSTRAINT "order-products_order_id_fkey";

-- DropForeignKey
ALTER TABLE "order-products" DROP CONSTRAINT "order-products_product_id_fkey";

-- DropTable
DROP TABLE "order-products";

-- CreateTable
CREATE TABLE "orders-products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "product_amount" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "orders-products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders-products" ADD CONSTRAINT "orders-products_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders-products" ADD CONSTRAINT "orders-products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
