create database if not exists db_basico;

use db_basico;

create table tb_equipo(
	id_equipo int not null auto_increment primary key,
    nombre varchar(50),
    localizacion varchar(200)
);


insert into tb_equipo (nombre, localizacion)values ('real madrid','madrid');