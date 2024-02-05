// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block constant";

//Block Scope
// console.log(blockVar);
// console.log(blockLet);
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet);
console.log(globalConst);

function show() {
    var functionVar = "I'm a block-scoped var2";
    var functionLet = "I'm a block-scoped let2";
    const functionConst = "I'm a block-scoped constant2";
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}
show()
