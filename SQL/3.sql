create table country(
c_id int primary key,
country varchar(40)
);

INSERT INTO country (c_id, country) VALUES
(1, 'india'),
(2, 'united states');
select * from country;


create table states(
state_id int primary key,
state varchar(50),
c_id int,
foreign key (c_id) references country(c_id)
);

INSERT INTO states (state_id, state, c_id) VALUES
(1, 'karnataka', 1),
(2, 'tamilnadu', 1),
(3, 'california', 2);

select * from states;


create table city(
city_id int primary key,
city varchar(50),
state_id int,
foreign key (state_id) references states(state_id)
);

INSERT INTO city (city_id, city, state_id) VALUES
(1, 'banglore', 1),
(2, 'mysore', 1),
(3, 'chennai', 2),
(4, 'San Franscisco', 3);

select * from city;

create table student1(
id int primary key,
name varchar(50),
city_id int,
foreign key (city_id) references city(city_id)
);

INSERT INTO student1 (id, name, city_id) VALUES
(1, 'kumar', 1),
(2, 'mahesh', 3),
(3, 'vishnu', 1),
(4, 'paul', 4),
(5, 'basker', 2);

select * from student1;

select s.id, s.name, c.city, st.state, co.country from student1 s 
join city c on s.city_id = c.city_id
join states st on st.state_id = c.state_id
join country co on co.c_id = st.c_id; 