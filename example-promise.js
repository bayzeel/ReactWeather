/*function getTempCallbak(location, callback){
    callback(undefined, 78);
    callback("City not found");
}

getTempCallbak("Philadelphia", function(err, temp){
    if(err){
        console.log("error", err);
    }else{
        console.log("success", temp);
    }
});

function getTempPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject("City not found");
        }, 1000);
    });
}

getTempPromise("Philadelphia").then(function(temp){
    console.log("promise success", temp);
}, function(err){
    console.log("promise error", err);
});*/

function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === "number" && typeof b === "number" && a !== null && b !== null && a !== "Infinity" && b !== "Infinity" && a !== "-Infinity" && b !== "-Infinity"){
            resolve(a + b);
        }else{
            reject("Please, enter the numbers");
        }
    });
}

addPromise(2, 3).then(function(res){
    console.log(res);
}, function(err){
    console.log(err);
});

addPromise(2, null).then(function(res){
    console.log(res);
}, function(err){
    console.log(err);
});
