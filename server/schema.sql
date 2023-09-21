-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema farm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema farm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `farm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `farm` ;

-- -----------------------------------------------------
-- Table `farm`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`animal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `sexe` ENUM('Male', 'Female') NOT NULL,
  `age` INT NOT NULL,
  `consumption` DECIMAL(8,3) NULL DEFAULT NULL,
  `birthday` VARCHAR(200) NULL DEFAULT NULL,
  `weight` DECIMAL(8,3) NULL DEFAULT NULL,
  `priceB` DECIMAL(8,3) NULL DEFAULT NULL,
  `priceS` DECIMAL(8,3) NULL DEFAULT NULL,
  `description` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`commerce`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`commerce` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(99) NOT NULL,
  `quantity` VARCHAR(99) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`disease`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`disease` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `image` VARCHAR(777) NOT NULL,
  `description` VARCHAR(444) NOT NULL,
  `solution` VARCHAR(999) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`doctor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(45) NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `online` ENUM('yes', 'no') NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `members` VARCHAR(9999) NOT NULL,
  `consumption` VARCHAR(45) NOT NULL,
  `eatingTime` VARCHAR(105) NOT NULL,
  `duration` VARCHAR(105) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`historique`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`historique` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `trace` VARCHAR(555) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`perte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`perte` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(105) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`price`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`price` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(8,3) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`resource`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(999) NOT NULL,
  `quantity` VARCHAR(969) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`trees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`trees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `quantity` INT DEFAULT NULL,
  `report` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(100) NOT NULL,
  `email` VARCHAR(105) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `budget` VARCHAR(45) NOT NULL,
  `likes` VARCHAR(45) NULL DEFAULT NULL,
  `premium` VARCHAR(20) NULL DEFAULT NULL,
  `imageUrl` VARCHAR(255) NULL DEFAULT NULL,  -- Add the imageUrl column here
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;



-- -----------------------------------------------------
-- Table `farm`.`wallet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`wallet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `money` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `farm`.`workers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`workers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(45) NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `salaire` VARCHAR(45) NOT NULL,
  `avance` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
