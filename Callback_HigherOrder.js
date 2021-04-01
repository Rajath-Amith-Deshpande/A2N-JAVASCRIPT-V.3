function fnHi(a,b){
    a()
    b()
}
// Higher Order Function which will take one or more functions as a Parameter

// Callback Function: Function which will be passed as a paramter.
fnHi(function(){
    console.log("I am First Parameter")
},function(){
    console.log("I am Second Parameter")
})