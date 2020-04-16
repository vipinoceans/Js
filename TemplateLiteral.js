const person = {
    name: "vipin k",
    age: "53",
    Des: function(){
       return `Hello, my name is ${this.name}`
    }
}
console.log(person.Des())