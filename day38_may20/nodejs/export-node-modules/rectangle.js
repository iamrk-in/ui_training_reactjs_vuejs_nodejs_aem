module.exports = (length, breadth, callback) => {
    if(length <= 0 || breadth <= 0) {
        setTimeout(() => callback(new Error(
            "dimensions cannot be negative: length = " + length + 
            ", breadth : " + breadth + " "), null), 5000);
    } else {
        setTimeout(() => callback(null, {
            Perimeter: () => {return 2 * (length * breadth)}, 
            Area: () => {return length * breadth}}), 5000);
    }
}