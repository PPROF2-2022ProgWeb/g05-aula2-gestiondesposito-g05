-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MG_Alarma
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MG_Alarma
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MG_Alarma` DEFAULT CHARACTER SET utf8 ;
USE `MG_Alarma` ;

-- -----------------------------------------------------
-- Table `MG_Alarma`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Pais` (
  `idPais` INT NOT NULL AUTO_INCREMENT,
  `Pais` VARCHAR(45) NULL,
  PRIMARY KEY (`idPais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Provincia` (
  `idProvincia` INT NOT NULL AUTO_INCREMENT,
  `Provincia` VARCHAR(45) NULL,
  `idPais` INT NULL,
  PRIMARY KEY (`idProvincia`),
  INDEX `kfPais_idx` (`idPais` ASC) VISIBLE,
  CONSTRAINT `kfPais`
    FOREIGN KEY (`idPais`)
    REFERENCES `MG_Alarma`.`Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Localidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Localidad` (
  `idLocalidad` INT NOT NULL AUTO_INCREMENT,
  `Localidad` VARCHAR(45) NULL,
  `idProvincia` INT NULL,
  PRIMARY KEY (`idLocalidad`),
  INDEX `kfProvincia_idx` (`idProvincia` ASC) VISIBLE,
  CONSTRAINT `kfProvincia`
    FOREIGN KEY (`idProvincia`)
    REFERENCES `MG_Alarma`.`Provincia` (`idProvincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Roles` (
  `idRoles` INT NOT NULL AUTO_INCREMENT,
  `Tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`idRoles`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL,
  `Apellido` VARCHAR(45) NULL,
  `DocumentoID` INT NULL,
  `Direccion` VARCHAR(100) NULL,
  `Password` VARCHAR(45) NULL,
  `Imagen` LONGTEXT NULL,
  `Email` VARCHAR(70) NULL,
  `idRoles` INT NULL,
  `idLocalidad` INT NULL,
  PRIMARY KEY (`idUsuario`),
  INDEX `idRoles_idx` (`idRoles` ASC) VISIBLE,
  INDEX `_idx` (`idLocalidad` ASC) VISIBLE,
  CONSTRAINT `kfLocalidad`
    FOREIGN KEY (`idLocalidad`)
    REFERENCES `MG_Alarma`.`Localidad` (`idLocalidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `kfRoles`
    FOREIGN KEY (`idRoles`)
    REFERENCES `MG_Alarma`.`Roles` (`idRoles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Estado` (
  `idEstado` INT NOT NULL AUTO_INCREMENT,
  `Estado` VARCHAR(45) NULL,
  PRIMARY KEY (`idEstado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Formadepago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Formadepago` (
  `idFormadepago` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`idFormadepago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Proveedor` (
  `idProveedor` INT NOT NULL,
  `Nombre` VARCHAR(45) NULL,
  `idProveedor` INT NULL,
  `Direccion` VARCHAR(45) NULL,
  `Telefono` INT NULL,
  PRIMARY KEY (`idProveedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL,
  `Descripcion` VARCHAR(45) NULL,
  `stock` INT NULL,
  `Imagen` LONGTEXT NULL,
  `Precio` FLOAT NULL,
  `fecha` DATE NULL,
  `estado` TINYINT NULL,
  `idProveedor` INT NULL,
  PRIMARY KEY (`idProductos`),
  INDEX `fkProdProv_idx` (`idProveedor` ASC) VISIBLE,
  CONSTRAINT `fkProdProv`
    FOREIGN KEY (`idProveedor`)
    REFERENCES `MG_Alarma`.`Proveedor` (`idProveedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MG_Alarma`.`Comprobante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MG_Alarma`.`Comprobante` (
  `idComprobante` INT NOT NULL AUTO_INCREMENT,
  `NombreProd` VARCHAR(45) NULL,
  `PrecioProd` FLOAT NULL,
  `CantidadProd` INT NULL,
  `fecha` DATE NULL,
  `idUsuario` INT NULL,
  `IdProducto` INT NULL,
  `idFormaDePAgo` INT NULL,
  `idEstado` INT NULL,
  PRIMARY KEY (`idComprobante`),
  INDEX `fkEstado_idx` (`idEstado` ASC) VISIBLE,
  INDEX `fkPagos_idx` (`idFormaDePAgo` ASC) VISIBLE,
  INDEX `fkUsuario_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fkProducto_idx` (`IdProducto` ASC) VISIBLE,
  CONSTRAINT `fkEstado`
    FOREIGN KEY (`idEstado`)
    REFERENCES `MG_Alarma`.`Estado` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fkPagos`
    FOREIGN KEY (`idFormaDePAgo`)
    REFERENCES `MG_Alarma`.`Formadepago` (`idFormadepago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fkUsuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `MG_Alarma`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fkProducto`
    FOREIGN KEY (`IdProducto`)
    REFERENCES `MG_Alarma`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
