create table SRDchapters (
    id serial primary key,
    chapNum int,
    chapName varchar(30),
    html text,
    images text,
    updated varchar(10)
);

insert into srdchapters (chapname, chapnum) values
('Character Creation', 1), ('Ability Scores', 2), ('Races', 3), ('Archetypes', 4), 
('Flaws', 5), ('Character Vitals', 6), ('Masteries', 7), ('Skills', 8), 
('Social', 9), ('Combat', 10), ('Equipment', 11), ('Magic', 12), ('Divine', 13), 
('Character Progresssion', 14), ('Misc Rules', 15);

create table SRDheader (
    id serial primary key,
    linkid varchar(6),
    body text,
    nextid varchar(6)
)

create table SRDparagraph (
    id serial primary key,
    linkid varchar(6),
    body text,
    nextid varchar(6)
)

create table SRDchart (
    id serial primary key,
    linkid varchar(6),
    leftbody text,
    rightbody text,
    nextid varchar(6)
)

create table SRDsidebar (
    id serial primary key,
    linkid varchar(6),
    body text,
    endid varchar(6),
    nextid varchar(6)
)

create table SRDsectionSpace (
    id serial primary key,
    linkid varchar(6),
    nextid varchar(6)
)

create table SRDbulletedList (
    id serial primary key,
    linkid varchar(6),
    body text,
    nextid varchar(6)
)