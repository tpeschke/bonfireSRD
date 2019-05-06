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

create table SRDbasic (
    id serial primary key,
    linkid text,
    body text,
    nextid text
)

create table SRDchart (
    id serial primary key,
    linkid text,
    leftbody text,
    rightbody text,
    nextid text
)

create table SRDsidebar (
    id serial primary key,
    linkid text,
    body text,
    endid text,
    nextid text
)

create table SRDadvanced (
    id serial primary key,
    linkid text,
    body text,
    endid text,
    nextid text
)

create table SRDsectionSpace (
    id serial primary key,
    linkid text,
    nextid text
)

create table srdImages (
    id serial primary key,
    linkid text,
    source text,
    alt text,
    nextid text
)

create table srdTable (
    id serial primary key,
    tableid text,
    name text, -- name of table in db
    headers text,
    nextTable text
)

create table strength (
    id serial primary key,
    score varchar(10),
    damage varchar(10),
    carry varchar(10),
    social varchar(10)
)

create table racial_preferences (
  elf text,
  human text,
  orc text
);

-- NEW TABLE QUERIES

insert into srdtable (name, nextid) values ('charisma', null);

create table charisma (
    id serial primary key,
    score text,
    favor text,
    start_honor text,
    trait text,
    social text
);

insert into charisma (score, favor, start_honor, trait, social) values 
('1','-3','Dishonor','0','n/a'),
('2','-2','Low','0','n/a'),
('3','-2','Low','0','n/a'),
('4','-2','Low','0','n/a'),
('5','-1','Average','0','n/a'),
('6','-1','Average','1','n/a'),
('7','0','Average','1','n/a'),
('8','0','Average','2','n/a'),
('9','0','Average','2','n/a'),
('10','0','Average','4','n/a'),
('11','0','Average','5','n/a'),
('12','0','Average','6','d4'),
('13','1','Average','7','d4'),
('14','1','Average','8','d6'),
('15','1','Average','9','d6'),
('16','2','Average','10','d8'),
('17','2','High','11','d8'),
('18','3','High','12','d10'),
('19','3','High','14','d12'),
('20','4','Great','16','d20');

select * from srdtable;