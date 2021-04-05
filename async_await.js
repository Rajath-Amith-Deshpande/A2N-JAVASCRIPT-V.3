    // async function f1() {
    //     return 10
    // }

    // f1().then(function(response){
    // console.log(response)
    //  },function(error){
    // console.log(error)
    // })

    
    
    function ReturnPromise() {
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve("Resolved")
            },2000)
        })
    }

    async  function fn() {
        var result = await ReturnPromise()
        console.log(result)
    }
    fn()