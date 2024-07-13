let students = [{ name: "Talha" , age: 22 , fee: 5445 },
     { name: "Ansari" , age: 30 , fee: 8787 }, 
     { name: "sheroz" , age: 34 , fee: 5454}];


let result = students.reduce(function (a,v,i) {
    console.log(a,  v,fee)
    return a + v.fee;
},0)

console.log("result", result)



let abc = (a, b) => {
    return a *b;
}

console.log(abc(2, 2));
console.log(abc(2, 5));





let obj = {
    name: "Ahmed",
    getName: () => {
        console.log(this)
    } 
}

obj.gerName()








let abc = (){
    console.log(arguments)
}

abc(2, 3)

function foo (){
    console.log(`hello`)
}