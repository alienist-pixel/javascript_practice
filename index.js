const name={
    firstname : "test",
    lastname : "test"
}

let p=function (){
    console.log(this);
}

let pp=p.bind(name);
pp(); //the bind creates a copy of the function and executes after being called.

p.call(name); //the call donot create a copy of the function and immediately called

