-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema grupo5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema grupo5
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `grupo5` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `grupo5` ;

-- -----------------------------------------------------
-- Table `grupo5`.`hibernate_sequence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`hibernate_sequence` (
  `next_val` BIGINT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`image_model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`image_model` (
  `id` BIGINT NOT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `pic_byte` LONGBLOB NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`user` (
  `user_name` VARCHAR(255) NOT NULL,
  `user_first_name` VARCHAR(255) NULL DEFAULT NULL,
  `user_last_name` VARCHAR(255) NULL DEFAULT NULL,
  `user_password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`product` (
  `product_id` INT NOT NULL,
  `product_actual_price` DOUBLE NULL DEFAULT NULL,
  `product_description` VARCHAR(2000) NULL DEFAULT NULL,
  `product_discounted_price` DOUBLE NULL DEFAULT NULL,
  `product_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`order_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`order_detail` (
  `order_id` INT NOT NULL,
  `order_alternate_contact_number` VARCHAR(255) NULL DEFAULT NULL,
  `order_amount` DOUBLE NULL DEFAULT NULL,
  `order_contact_number` VARCHAR(255) NULL DEFAULT NULL,
  `order_full_name` VARCHAR(255) NULL DEFAULT NULL,
  `order_full_order` VARCHAR(255) NULL DEFAULT NULL,
  `order_status` VARCHAR(255) NULL DEFAULT NULL,
  `product_product_id` INT NULL DEFAULT NULL,
  `user_user_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`product_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`product_images` (
  `product_id` INT NOT NULL,
  `image_id` BIGINT NOT NULL,
  PRIMARY KEY (`product_id`, `image_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`role` (
  `role_name` VARCHAR(255) NOT NULL,
  `role_description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`role_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `grupo5`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `grupo5`.`user_role` (
  `user_id` VARCHAR(255) NOT NULL,
  `role_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
