function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Charlie",
        "delta": "Denver"
    }

    result = lookup[val]

    //return result;
if (result = "undefined") {
    result = "Not found"
}

console.log(result)

}

phoneticLookup("alphxa")