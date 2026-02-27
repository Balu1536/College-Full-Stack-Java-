function greetUser(name:string, title?:string):string{
        if (title){
            return `Hello, ${title} ${name}!`;
        }
        else{
            return `Hello, ${name}!`;
        }
    }
    console.log(greetUser("Balu","Mr."));
    console.log(greetUser("S"));




    function greetUser1(name:string, title:string="Mr."):string{
        if (title){
            return `Hello, ${title} ${name}!`;
        }
        else{
            return `Hello, ${name}!`;
        }
    }
    console.log(greetUser1("Balu","Mr."));
    console.log(greetUser1("S"));