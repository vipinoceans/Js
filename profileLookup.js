var contacts = [
    {
        fname: "Adams",
        lname: "Jan",
        num: "1212121",
        likes:[
            "pizza",
            "Tofee"
        ]
    },
    {
        fname: "Mat",
        lname: "Jan",
        num: "1212232121",
        likes:[
            "Mango",
            "Tomato"
        ]
    },
    {
        fname: "Ponnu",
        lname: "G",
        num: "11232121",
        likes:[
            "Litchi",
            "Pulp"
        ]
    }
]

function lookupProfile(name, prop){
for (var i = 0; i< contacts.length; i++) {

    if (contacts[i].fname === name){
        return contacts[i][prop] || "No such Property"
    } 

}
return "No such contact"

}

var data = lookupProfile("Ponnu","lisdkes")

console.log(data);