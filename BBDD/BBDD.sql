create database if not exists Fruteria;

# Privilegios para `admin`@`%`

GRANT ALL PRIVILEGES ON *.* TO `admin`@`%` IDENTIFIED BY PASSWORD '*67A88380898811C81F629ABCC8B56AFC5DD78FF5' WITH GRANT OPTION;

use Fruteria;

Create or replace table Frutas(
	Fruta_id int auto_increment,
	Name VARCHAR(50),
	Price DECIMAL(6,2),
	primary key(Fruta_id));