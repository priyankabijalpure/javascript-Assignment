class Employee{

    setDetails(name,id)
    {
        this.name=name;
        this.id=id;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    }
    let emp=new Employee();
    
    emp.setDetails(1,"priyanka");
    console.log(emp.getID()+" "+emp.getName());