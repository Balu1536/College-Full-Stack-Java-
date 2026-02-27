use day1;

create table blood(
blood_id int primary key,
bg varchar(6)
);

INSERT INTO blood (blood_id, bg) VALUES
(1, 'o+ve'),
(2, 'o-ve'),
(3, 'b+ve'),
(4, 'b-ve');

select * from blood;

create table state(
state_id int primary key,
state varchar(35)
);

INSERT INTO state (state_id, state) VALUES
(1, 'karnataka'),
(2, 'tamilnadu'),
(3, 'california'),
(4, 'andhrapradesh'),
(5, 'kerala');

select * from state;

create table employee(
eid int,
ename varchar(50),
age int,
bg_id int,
state_id int,
foreign key (state_id) references state(state_id),
foreign key(bg_id) references blood(blood_id)
); 

INSERT INTO employee (eid, ename, age, bg_id, state_id) VALUES
(1, 'madhesh', 25, 1, 1),
(2, 'suresh', 24, 2, 4),
(3, 'veena', 30, 2, 1),
(4, 'kiran', 35, 3, 1),
(5, 'ravi', 25, 3, 5);


select * from employee;


select e.eid, e.ename,e.age,b.bg,s.state from employee e 
join blood b  on b.blood_id=e.bg_id 
join state s on s.state_id=e.state_id;