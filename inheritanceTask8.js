class Member {

    constructor(name, age, phoneNo, address, salary, specialization) {

        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
        this.address = address;
        this.salary = salary;
        this.specialization = specialization;

    }

    printSalary() {

        console.log(this.salary);

    }

}

class Employee extends Member {

    print_details() {

        console.log(this.name);
        console.log(this.specialization);

        this.printSalary();

    }

}

class Manager extends Member {

    print_details() {

        console.log(this.name);
        console.log(this.specialization);

        this.printSalary();

    }

}    

//Do Not change the Below  Code

var obj = new Employee("Ram",25,"7003","Bangalore",1000,"cse");
obj.print_details();

var obj1 = new Employee("Shyam",250,"8098","Chennai",2000,"civil");
obj1.print_details();

var obj_Man = new Manager("babu",100,"1234","Bangalore",1000,"JP");
obj_Man.print_details();

var obj1_Man = new Manager("Rao",250,"456","Kerala",3000,"GC");
obj1_Man.print_details();