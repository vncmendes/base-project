/*
  Warnings:

  - You are about to drop the `Order_Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order_Product" DROP CONSTRAINT "Order_Product_order_id_fkey";

-- DropForeignKey
ALTER TABLE "Order_Product" DROP CONSTRAINT "Order_Product_product_id_fkey";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "amount" SET DATA TYPE TEXT,
ALTER COLUMN "value" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Order_Product";

-- CreateTable
CREATE TABLE "order-products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "product_amount" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "order-products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order-products" ADD CONSTRAINT "order-products_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order-products" ADD CONSTRAINT "order-products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
