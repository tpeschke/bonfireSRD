create table SRDchapters (
    id serial primary key,
    chapNum int,
    chapName varchar(30),
    html text,
    images text
);

insert into srdchapters (chapname, chapnum) values
('Character Creation', 1), ('Ability Scores', 2), ('Races', 3), ('Archetypes', 4), 
('Flaws', 5), ('Character Vitals', 6), ('Masteries', 7), ('Skills', 8), 
('Social', 9), ('Combat', 10), ('Equipment', 11), ('Magic', 12), ('Divine', 13), 
('Character Progresssion', 14), ('Misc Rules', 15)