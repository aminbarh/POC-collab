create database poc;
create table airport(
    iata varchar(3) primary key,
    name varchar(100) not null,
    lattitude numeric,
    longitude numeric
);

create table weather(
    id serial  primary key,
    name varchar(100) not null,
    wind_direction numeric,
    wind_speed numeric,
    visibility numeric
);

create table exercise(
    id serial ,
    name varchar(100) not null,
    airport_iata varchar references airport(iata),
    weather_id integer references weather(id),
    PRIMARY KEY(id,airport_iata,weather_id)
);