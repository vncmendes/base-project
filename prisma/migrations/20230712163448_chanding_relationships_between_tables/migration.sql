/*
  Warnings:

  - You are about to drop the column `product_id` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_product_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "product_id";

-- CreateTable
CREATE TABLE "Order_Product" (
    "id" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "Order_Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order_Product" ADD CONSTRAINT "Order_Product_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Product" ADD CONSTRAINT "Order_Product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
