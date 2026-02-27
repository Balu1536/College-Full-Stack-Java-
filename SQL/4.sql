create database day2;
use day2; 
CREATE TABLE employee (
    eid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    salary INT NULL,
    dept VARCHAR(20),
    doj DATE
);

INSERT INTO employee (eid, fname, lname, age, salary, dept, doj) VALUES
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23'),
(2, 'sowmya', 'kumari', 23, 19000, 'db', '2010-11-13'),
(3, 'kishore', 'kumar', 27, 36000, 'android', '2011-10-16'),
(4, 'abimanyu', 'biswal', 22, NULL, 'android', '2010-02-20'),
(5, 'soni', 'kumar', 24, 21800, '.net', '2009-06-21'),
(6, 'anu', '_singh', 22, 12000, 'db', '2010-10-23'),
(7, '_dinesh', 'moh%anty', 23, 15000, '.net', '2009-08-26'),
(8, 'nishala', '_kumari', 22, 18000, 'db', '2008-07-19'),
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23');

CREATE TABLE patient (
    pid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    bg VARCHAR(10)
);

INSERT INTO patient (pid, fname, lname, age, bg) VALUES
(1, 'madhava', 'reddy', 45, 'o+ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(4, 'hari', 'kiran', 60, 'b-ve'),
(3, 'madhava', 'kiran', 52, 'o+ve'),
(5, 'veena', 'kumari', 42, NULL),
(6, 'k_iran', 'kumar', 39, 'b-ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(7, 'mahes%h', 'nambootri', 36, 'b+ve'),
(8, 'rahul', 'kumar', 46, 'b-ve'),
(9, 'bharat', 'kumar', 56, 'b-ve');

select * from patient;

select pid,fname,lname,age,bg from patient;

select concat(fname,lname) as 'full name', pid ,bg from patient;

select concat(fname,lname) as 'full name', age+2 from patient;

select concat(fname," ",lname," 's bg is", bg, "and he/she is from India")
from patient;

select concat(fname,lname) as 'full name', age from
patient order by age;

select fname, lname, bg from patient order by
bg desc;

select fname, lname, pid from patient order
by lname, fname desc;

select fname,age from patient order by
concat('Hello'+fname+lname) desc;

select distinct fname, age from patient;

select distinct age, bg from patient;

select distinct fname, age,bg from patient order
by bg desc;

select fname, lname, age from patient limit 3;
select bg, count(*) as‘count’ from patient group by bg;
select fname, lname, age from patient order by age desc limit 3  ;

select lname, MIN(age) from patient group by bg ,lname;

select fname, lname from patient group by fname, lname;
select fname, lname from patient group by fname, lname,age;
select fname, lname, avg(age) from patient group by fname, lname;

select bg, count(*) as 'count' from patient group by bg;
select dept from employee group by dept;
select bg, MAX(age) as 'max age' from patient group by bg having MAX(age)>40;
select MAX(age) as 'max age' from patient group by bg;


select count(age) as 'tot rows',max(age) as 'max age' from patient where age>45;

select p1.* from patient p1 where 3=( select
count(distinct(p2.pid)) from patient p2 where
p2.age>p1.age)