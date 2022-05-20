var rect = require("./rectangle");
const user = require("./user");

module.exports.Rect = function Rect(l, b) {
    rect(l, b, (err, rectangle) => {
        if(err) {
            console.log("there is an error: " + err.message);
        } else {
            console.log("Area of rectangle with dimensions length = " + l + ", breadth = " + b + " : " + rectangle.Area());
            console.log("Perimeter of rectangle with dimensions length = " + l + ", breadth = " + b + " : " + rectangle.Perimeter());
        }
    })
}

module.exports.Usr = function Usr(fname, lname) {
    user(fname, lname, (err, userdata) => {
        if(err) {
            console.log("there is an error: " + err.message);
        } else {
            console.log(userdata.Fullname());
        }
    })
}