
DROP TABLE if exists appliances;
DROP TABLE if exists books;
DROP TABLE if exists clothes;


CREATE TABLE appliances(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `picture` TEXT NOT NULL,
    `extra_pic` TEXT NULL,
    `section` VARCHAR(255) NOT NULL COMMENT 'big, small, kitchen, garage',
    `date_purchase` DATE NOT NULL,
    `price` INT NULL,
    `shop` VARCHAR(255) NULL,
    `brand` VARCHAR(255) NULL,
    `new_or_not` TINYINT(1) NOT NULL,
    `link_to_manual` TEXT NULL,
    `years_of_warranty` INT NOT NULL,
    `feeling` INT NOT NULL,
    `upgrade` TINYINT(1) NOT NULL,
    `notes` TEXT NULL
);

CREATE TABLE books(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `picture` TEXT NOT NULL,
    `extra_pic` TEXT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `date_purchase` DATE NOT NULL,
    `price` INT NULL,
    `shop` VARCHAR(255) NULL,
    `publisher` VARCHAR(255) NULL,
    `new_or_not` TINYINT(1) NOT NULL,
    `read_or_not` INT NOT NULL COMMENT 'read 2, partly read 1, not read 0',
    `title` TEXT NOT NULL,
    `author` VARCHAR(255) NULL,
    `date_publish` DATE NULL,
    `more_from_author` TINYINT(1) NOT NULL,
    `feeling` INT NOT NULL,
    `upgrade` TINYINT(1) NOT NULL,
    `notes` TEXT NULL
);

CREATE TABLE clothes(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `picture` TEXT NOT NULL,
    `extra_pic` TEXT NULL,
    `closet_section` VARCHAR(255) NOT NULL,
    `date_purchase` DATE NOT NULL,
    `price` INT NULL,
    `shop` VARCHAR(255) NULL,
    `brand` VARCHAR(255) NULL,
    `season` VARCHAR(255) NOT NULL,
    `new_or_not` TINYINT(1) NOT NULL,
    `ready_to_use` TINYINT(1) NOT NULL,
    `materials` VARCHAR(255) NULL,
    `wash_sched` VARCHAR(255) NULL,
    `wash_info` VARCHAR(255) NULL,
    `feeling` INT NOT NULL,
    `upgrade` TINYINT(1) NOT NULL,
    `notes` TEXT NULL
);
