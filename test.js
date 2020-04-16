function wordBlanks(myNoun, MyAdjective, myVerb, myAdverb)
{
    var result = "";
    
    result += "The " +  MyAdjective + " " +myNoun + " "  + myVerb  + 
    " to the store" + " "  + myAdverb

    return result;


}

console.log(wordBlanks("dog","big","ran","Quickly"))