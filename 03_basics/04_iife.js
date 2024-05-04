// Immediately Invoked Function Expressions (IIFE)

//global scope ke pollution ko htane k lie hota iifee ka use.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

