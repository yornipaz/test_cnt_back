CREATE DATABASE IF NOT EXISTS db_cnt_test;
USE db_cnt_test;
CREATE TABLE IF NOT EXISTS tbl_patient(
id int auto_increment primary key not null,
documentNumber varchar(10) not null,
firstName varchar(30) not null,
lastName varchar(30) not null,
age int not null,
address varchar(30),
gender char(1),
weight double not null,
height double not null,
smoker boolean not null,
smokerYears double ,
diet boolean not null,
weightHeight double,
state varchar(20) not null,
priority double not null,
risk double not null
);
DESC tbl_patient;



