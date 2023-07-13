/*
  Warnings:

  - Added the required column `name` to the `Order_Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order_Product" ADD COLUMN     "name" TEXT NOT NULL;
