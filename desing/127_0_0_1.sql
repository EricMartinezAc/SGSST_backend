-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-12-2020 a las 22:19:07
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `main_10001`
--
CREATE DATABASE IF NOT EXISTS `main_10001` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `main_10001`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombres` varchar(40) NOT NULL,
  `apellidos` varchar(40) NOT NULL,
  `pais` varchar(40) NOT NULL,
  `ciudad` varchar(40) NOT NULL,
  `dpto` varchar(40) NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `telefono1` int(10) NOT NULL,
  `telefono2` bigint(20) NOT NULL,
  `fecha_natal` date NOT NULL,
  `tipo_ident` varchar(20) NOT NULL,
  `no_ident` int(20) NOT NULL,
  `no_libr_militar` bigint(20) NOT NULL,
  `tipo_sangre` varchar(5) NOT NULL,
  `rh` varchar(5) NOT NULL,
  `foto_ident` varchar(100) NOT NULL,
  `estado_civil` varchar(20) NOT NULL,
  `huella_digital` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombres`, `apellidos`, `pais`, `ciudad`, `dpto`, `direccion`, `telefono1`, `telefono2`, `fecha_natal`, `tipo_ident`, `no_ident`, `no_libr_militar`, `tipo_sangre`, `rh`, `foto_ident`, `estado_civil`, `huella_digital`) VALUES
(1001, 'Eric Arturo', 'Martinez Acelas', 'Colombia', 'Soledad', 'Soledad', 'Calle 60B #12 - 40', 3001212, 3170017720, '1992-06-16', 'Cedula', 1140851982, 6536346343, 'O', '+', 'https://raw.githubusercontent.com/EricMartinezAc/cv_2020-2/master/img/eric.jpg', 'Soltero', '12312FEACBEF2DE22312400E02CA45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `psw` varchar(10) NOT NULL,
  `clave_seguridad` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `id_persona`, `user_name`, `psw`, `clave_seguridad`) VALUES
(2001, 1001, 'EricMartAc', 'Rouse2017*', 'R2017E1992');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_persona` (`id_persona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2002;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
