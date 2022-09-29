/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;



/*-------------------------------------------------------*/
/*Paso 01 Crea la base de datos del proyecto             */
/*-------------------------------------------------------*/
CREATE DATABASE gestion_mgalarmas;



/*-------------------------------------------------------*/
/*Paso 02 Seleciona una base de datos con ese nombre     */
/*-------------------------------------------------------*/
USE gestion_mgalarmas;


/*----------------------------------------------------------*/
/*Paso 03 Creo la tabla clientes*/
/*----------------------------------------------------------*/
CREATE TABLE `cliente` (
  `Id_Cliente` int(5) NOT NULL,
  `Razon Social / Cliente` varchar(70) NOT NULL,
  `Cuit/Cuil/Dni` varchar(13) NOT NULL,
  `Calle` varchar(70) NOT NULL,
  `Numero` int(4) NOT NULL,
  `Barrio` varchar(50) NOT NULL,
  `Localidad` varchar(50) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `Tipo de Iva` int(3) NOT NULL,
  `Cta Cte?` varchar(5) NOT NULL,
  `E-mail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*----------------------------------------------------------*/
/*Paso 04 Creo la tabla Compra*/
/*----------------------------------------------------------*/

CREATE TABLE `compra` (
  `cuitcuilCliente` int(13) NOT NULL,
  `codProducto` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



/*----------------------------------------------------------*/
/*Paso 05 Creo la tabla producto*/
/*----------------------------------------------------------*/
CREATE TABLE `producto` (
  `Id_Prod` int(6) NOT NULL,
  `Descripcion` varchar(70) NOT NULL,
  'Marca' varchar(50) NOT NULL,
  'Modelo' varchar(50) NOT NULL,
  'Origen' varchar(50) NOT NULL,
  'Rubro' varchar(50) NOT NULL,
  'Proveedor' varchar(50) NOT NULL,
  `Stock` int(10) NOT NULL,
  `Precio de venta` decimal(6,0) NOT NULL,
  `Precio de Costo` decimal(6,0) NOT NULL,
  'Ganancias' decimal(6,0) NOT NULL,
  `Porcentaje de Iva` int(3) NOT NULL,
  `Id_Prov` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


/*----------------------------------------------------------*/
/*Paso 05 Creo la tabla proveedor*/
/*----------------------------------------------------------*/

CREATE TABLE `proveedor` (
  `Id_Prov` int(5) NOT NULL,
  `Cuit/Cuil` varchar(13) NOT NULL,
  `Razon Social` varchar(70) NOT NULL,
  `Calle` varchar(70) NOT NULL,
  `Numero` int(4) NOT NULL,
  `Barrio` varchar(50) NOT NULL,
  `Localidad` varchar(50) NOT NULL,
  `Telefono` int(25) NOT NULL,
  `Tipo de Iva` varchar(50) NOT NULL,
  `E-mail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*
DROP TABLE IF EXISTS clientes;
CREATE TABLE `clientes` (
  `id_cliente` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) DEFAULT NULL,
  `apellido` varchar(70) DEFAULT NULL,
  `cuil` varchar(30) NOT NULL,
  `fecha_alta` date DEFAULT NULL,
  `telefono` varchar(45) NOT NULL,
  `e_mail` varchar(70) NOT NULL,
  `localidad` int(11) DEFAULT NULL,
  `tipo_cliente` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `localidad` (`localidad`),
  KEY `tipo_cliente` (`tipo_cliente`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`localidad`) REFERENCES `localidad` (`id_localidad`),
  CONSTRAINT `clientes_ibfk_2` FOREIGN KEY (`tipo_cliente`) REFERENCES `tipo_cliente` (`id_tipo_cliente`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS facturacion;
CREATE TABLE `facturacion` (
  `id_factura` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_factura` date NOT NULL,
  `codigo_producto` int(11) NOT NULL,
  `tipo_factura` int(11) NOT NULL,
  `cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_factura`),
  KEY `codigo_producto` (`codigo_producto`),
  KEY `tipo_factura` (`tipo_factura`),
  KEY `cliente` (`cliente`))/*
  CONSTRAINT `facturacion_ibfk_1` FOREIGN KEY (`codigo_producto`) REFERENCES `productos` (`id_numero_referencia`),
  CONSTRAINT `facturacion_ibfk_2` FOREIGN KEY (`tipo_factura`) REFERENCES `tipo_factura` (`id_tipo_factura`),
  CONSTRAINT `facturacion_ibfk_3` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS productos;
CREATE TABLE `productos` (
  `id_numero_referencia` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(150) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `fecha_lote` date DEFAULT NULL,
  `nombre_articulo` varchar(70) DEFAULT NULL,
  `precio_venta` decimal(11,2) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL COMMENT '1',
  `proveedor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_numero_referencia`),
  KEY `proveedor` (`proveedor`))/*,
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`proveedor`) REFERENCES `proveedor` (`id_proveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS proveedor;
CREATE TABLE `proveedor` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `localidad` int(11) NOT NULL,
  PRIMARY KEY (`id_proveedor`),
  KEY `localidad` (`localidad`),
  CONSTRAINT `proveedor_ibfk_1` FOREIGN KEY (`localidad`) REFERENCES `localidad` (`id_localidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



DROP TABLE IF EXISTS tipo_factura;
CREATE TABLE `tipo_factura` (
  `id_tipo_factura` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_factura` varchar(50) NOT NULL,
  PRIMARY KEY (`id_tipo_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS usuario;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `clave` varchar(45) DEFAULT NULL,
  `cliente` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL COMMENT '1',
  PRIMARY KEY (`id_usuario`),
  KEY `cliente` (`cliente`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;*/