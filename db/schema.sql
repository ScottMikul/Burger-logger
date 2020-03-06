drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burgers(id int auto_increment, burger_name varchar(20), devoured bool, primary key (id));
