var names = ["Vasyl", "Basil", "Jen"];

names.forEach(function(name){
    console.log("forEach", name);
});

names.forEach((name) => {
    console.log("arrowFunc", name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";
console.log(returnMe("Bill"));

var person = {
    name: "Vasyl",
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + " says hi to " + name);
        });
    }
};

person.greet();

function add(a, b){
    return a + b;
}

var addStatement = (a, b) => {
    console.log(a + b);
};

var addExpression = (a, b) => console.log(a + b);

console.log(add(1, 3));
console.log(add(0, 9));
addStatement(1, 3);
addStatement(0, 9);
addExpression(1, 3);
addExpression(0, 9);