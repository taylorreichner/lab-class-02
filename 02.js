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
   



module.exports = {
    newArray,
    filteredArray,
}