function fibonacci(num)
    {   
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
    
    // console.log(fibonacci(prompt("Necenci fibonacci ededi lazimdir?")));
    alert(fibonacci(prompt("Necenci fibonacci ededi lazimdir?")));
