const newArray = (arr, callback) => {
    let x = []
    for (let y of arr) {
        x = [...x, callback(y)]
    };

    return x;
    

}

const filteredArray = (arr, callback) => {
    let x = []
    for (let y of arr) {
        if (callback(y)) x = [...x, y];
    }
    return x;
}
   
const findStuff = (arr, callback) => {
    
    for (let y of arr) 
        if (callback(y)) return y; 
    
        return -1; 
}

const reduceArray = (arr, callback, initialValue) => {
    let x = initialValue || arr[0]; 

    if(!initialValue) {
        for (let y of arr) {
             x = callback(x, arr[y])
        }
    } else {
        for(let y of arr) {
            x = callback(x, y)
        }
    }
       
         return x; 
}

const every = (arr, callback) => {
    for (let x of arr) {
        if (callback(arr[x], x)) {
            return true;
        } else if (!callback(arr[x], x)) {
            return false;
        }
    }

}
module.exports = {
    newArray,
    filteredArray,
    reduceArray,
    findStuff, 
    every,
}