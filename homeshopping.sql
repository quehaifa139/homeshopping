/*
Navicat MySQL Data Transfer

Source Server         : exercise
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : shopment

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-06-18 20:24:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `com_id` varchar(50) NOT NULL,
  `com_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `c_type` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descript` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '数据最终修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8 COMMENT='商品id\r\n图片路径';

-- ----------------------------
-- Records of commodity
-- ----------------------------

-- ----------------------------
-- Table structure for merchant
-- ----------------------------
DROP TABLE IF EXISTS `merchant`;
CREATE TABLE `merchant` (
  `name` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mer_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phonenumber` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of merchant
-- ----------------------------
INSERT INTO `merchant` VALUES ('名优商城', '123', '1122', '155345');
INSERT INTO `merchant` VALUES ('名优商城', '', '1122', '155345');
INSERT INTO `merchant` VALUES ('家居坊', '1234', '123', '155345');
INSERT INTO `merchant` VALUES ('que1', '123', '1234', '155345');
INSERT INTO `merchant` VALUES ('美年达', '123', '3456', '155345');
INSERT INTO `merchant` VALUES ('小黑', '123', 'undefined', '155345');
INSERT INTO `merchant` VALUES ('小', '1234', '123', '155345');
INSERT INTO `merchant` VALUES ('AAA', '123', '123', '155345');
INSERT INTO `merchant` VALUES ('家居商城', 'abcd12', '1234567', '13970792738');
INSERT INTO `merchant` VALUES ('米雪冰城', 'abcd12', '3456', '13970792738');
INSERT INTO `merchant` VALUES ('原作其实', 'abcd1234', '3456', '15567893456');
INSERT INTO `merchant` VALUES ('大麦网页', 'abcd12', '3456', '13970792738');
INSERT INTO `merchant` VALUES ('煎饼果子', 'abcd12', '3456', '13970792738');
INSERT INTO `merchant` VALUES ('煎饼果子', 'abcd12', '3456', '13970792738');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `id` int NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `color` varchar(10) NOT NULL,
  `unit-price` decimal(15,2) NOT NULL,
  `number` int DEFAULT NULL,
  `sum-price` decimal(15,2) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------

-- ----------------------------
-- Table structure for tab_user
-- ----------------------------
DROP TABLE IF EXISTS `tab_user`;
CREATE TABLE `tab_user` (
  `username` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nickname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paymentID` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pay_password` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_user
-- ----------------------------
INSERT INTO `tab_user` VALUES ('abcd', '3230334856@qq.com', null, '123456', null, null);
INSERT INTO `tab_user` VALUES ('abcd', '3230334856@qq.com', null, 'abcd12', null, null);
INSERT INTO `tab_user` VALUES ('cssd', '3230334856@qq.com', null, 'abcd1234', null, null);
INSERT INTO `tab_user` VALUES ('abcd', '3230334856@qq.com', null, 'abcd12', null, null);
INSERT INTO `tab_user` VALUES ('ssdd', '3230334856@qq.com', null, 'abcd12', null, null);
INSERT INTO `tab_user` VALUES ('dfsc', '3230334856@qq.com', null, 'abcd12', null, null);
INSERT INTO `tab_user` VALUES ('abcd', '3230334856@qq.com', null, 'abcd12', null, null);

-- ----------------------------
-- Table structure for 供应商表
-- ----------------------------
DROP TABLE IF EXISTS `供应商表`;
CREATE TABLE `供应商表` (
  `供应商id` int NOT NULL,
  `名称` varchar(30) NOT NULL,
  `地址` varchar(20) NOT NULL,
  `联系方式` varchar(30) NOT NULL,
  PRIMARY KEY (`供应商id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 供应商表
-- ----------------------------

-- ----------------------------
-- Table structure for 商品-简介表
-- ----------------------------
DROP TABLE IF EXISTS `商品-简介表`;
CREATE TABLE `商品-简介表` (
  `商品名称` varchar(20) NOT NULL,
  `商品介绍` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 商品-简介表
-- ----------------------------

-- ----------------------------
-- Table structure for 商家-供应商表
-- ----------------------------
DROP TABLE IF EXISTS `商家-供应商表`;
CREATE TABLE `商家-供应商表` (
  `商家名称` varchar(20) NOT NULL,
  `商品id` int NOT NULL,
  `商品价格` varchar(16) NOT NULL,
  `商品库存` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 商家-供应商表
-- ----------------------------

-- ----------------------------
-- Table structure for 用户-地址表
-- ----------------------------
DROP TABLE IF EXISTS `用户-地址表`;
CREATE TABLE `用户-地址表` (
  `用户名` varchar(15) NOT NULL,
  `地址` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 用户-地址表
-- ----------------------------

-- ----------------------------
-- Table structure for 用户-收货表
-- ----------------------------
DROP TABLE IF EXISTS `用户-收货表`;
CREATE TABLE `用户-收货表` (
  `用户名` varchar(12) NOT NULL,
  `联系方式` varchar(20) NOT NULL,
  `收货地址` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 用户-收货表
-- ----------------------------

-- ----------------------------
-- Table structure for 用户-联系方式表
-- ----------------------------
DROP TABLE IF EXISTS `用户-联系方式表`;
CREATE TABLE `用户-联系方式表` (
  `用户名` varchar(12) NOT NULL,
  `联系方式` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 用户-联系方式表
-- ----------------------------

-- ----------------------------
-- Table structure for 用户购物车表
-- ----------------------------
DROP TABLE IF EXISTS `用户购物车表`;
CREATE TABLE `用户购物车表` (
  `商品名` varchar(20) NOT NULL,
  `商品价格` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 用户购物车表
-- ----------------------------

-- ----------------------------
-- Table structure for 订单表
-- ----------------------------
DROP TABLE IF EXISTS `订单表`;
CREATE TABLE `订单表` (
  `商品名` varchar(30) NOT NULL,
  `数量` varchar(20) NOT NULL,
  `总价` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 订单表
-- ----------------------------
