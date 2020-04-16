function testElseIf(val){
    if (val < 5 && val > 3){
        x = "less than 5"
    }
    else if (val < 3){
        x = "less than 3"
    }
    else {
        x = "greater than 5"
    }

    console.log(x)
}

testElseIf(1)