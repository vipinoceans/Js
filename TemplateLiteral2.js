const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-function'],
    failure: ['no-var','var-on-top','linebreak'],
    skipped: ['id-blacklist','no-dup-keys']
};

function makeList(arr){
    const resultDisplayArray = [];

for ( let i = 0; i< arr.length; i++){
    resultDisplayArray.push(`<li class="text-waring">${arr[i]}</li>`)

}
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

