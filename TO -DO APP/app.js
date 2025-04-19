let todo =[]
let req = prompt("Please enter your request ")
console.log(req)
while(true){
    if((req == "quit") || (req == null)){
        console.log("Quitting app.... ")
        break;
    }
    if(req == "list"){
        for (i=0; i<todo.length; i++)
        console.log(i, todo[i])
        console.log("---------")
    }
    else if(req == "add"){
        let task =  prompt("Please enter the task you want to add ")
        todo.push(task)
        console.log(`Task:(${task}) is added`)
        console.log("---------")
    
        
    }
    else if (req == "delete"){
        let idx =  prompt("Please enter the task index ")
        todo.splice(idx,1)
        console.log("Task deleted")
    }
    else{
        console.log("wrong input")
    }
    req = prompt("Please enter your request ")
   


}
