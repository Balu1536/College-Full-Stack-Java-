use day1;

create table employee(
	eid int primary key,
    name varchar(10) not null,
    salary int,
    bg varchar(5) default "O+ve",
    age int check(age between 18 and 60),
    email varchar(9) unique
);

insert into employee(eid, name,salary,age,email) values(4,"ravi",36000,48,"r@gail");
insert into employee values(5,"ravi",36000,"O+ve",48,"ravi");

select * from employee;
use day1;
drop table employee;