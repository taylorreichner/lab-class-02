const newArray = (arr, callback) => {
    let x = []
    for (let y of arr) {
        x = [...x, callback(y)]
    };

    return x;
    

}






module.exports = {
    newArray
}