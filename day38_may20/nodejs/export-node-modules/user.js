module.exports = (fname, lname, callback) => {
    if(fname == "" || lname == "") {
        setTimeout(() => callback(new Error(
            "fname and lname cannot be empty: fname = " + fname + 
            ", lname : " + lname + " "), null), 5000);
    } else {
        setTimeout(() => callback(null, {
            Fullname: () => {return fname + " " + lname}, }), 5000);
    }
}