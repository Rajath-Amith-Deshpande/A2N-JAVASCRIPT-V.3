var obj = {
    c:5
}

function fn(x,y,z){
    
    var a = x
    var b = y
    var d = z
    
    return a + b + this.c + d
}

// console.log(fn.call(obj,2,3,7))
// console.log(fn.apply(obj,[3,4,15]))
    var fn = fn.bind(obj,22,22,22)
    console.log(fn())