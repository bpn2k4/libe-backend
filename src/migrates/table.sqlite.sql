-- Drop tables if they exist
DROP TABLE IF EXISTS `wards`;
DROP TABLE IF EXISTS `districts`;
DROP TABLE IF EXISTS `provinces`;

-- Disable foreign keys temporarily
PRAGMA foreign_keys = OFF;

-- Define provinces table
CREATE TABLE IF NOT EXISTS `provinces` (
    `provinceId` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `deletedAt` DATETIME
);

-- Create indices for provinces table
CREATE INDEX `province_name_index` ON `provinces` (`name`);
CREATE INDEX `province_type_index` ON `provinces` (`type`);
CREATE INDEX `province_deleted_index` ON `provinces` (`deleted`);

-- Define districts table
CREATE TABLE IF NOT EXISTS `districts` (
    `districtId` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `provinceId` INTEGER NOT NULL REFERENCES `provinces` (`provinceId`) ON DELETE NO ACTION ON UPDATE CASCADE,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `deletedAt` DATETIME
);

-- Create indices for districts table
CREATE INDEX `district_name_index` ON `districts` (`name`);
CREATE INDEX `district_type_index` ON `districts` (`type`);
CREATE INDEX `district_deleted_index` ON `districts` (`deleted`);
CREATE INDEX `district_provinceId_index` ON `districts` (`provinceId`);

-- Define wards table
CREATE TABLE IF NOT EXISTS `wards` (
    `wardId` INTEGER PRIMARY KEY AUTOINCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `districtId` INTEGER NOT NULL REFERENCES `districts` (`districtId`) ON DELETE NO ACTION ON UPDATE CASCADE,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `deletedAt` DATETIME
);

-- Create indices for wards table
CREATE INDEX `ward_name_index` ON `wards` (`name`);
CREATE INDEX `ward_type_index` ON `wards` (`type`);
CREATE INDEX `ward_deleted_index` ON `wards` (`deleted`);
CREATE INDEX `ward_districtId_index` ON `wards` (`districtId`);

-- Enable foreign keys temporarily
PRAGMA foreign_keys = ON;

