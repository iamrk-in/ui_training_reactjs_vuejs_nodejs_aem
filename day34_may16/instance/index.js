var vi = new Vue({
    el: "#app", 
    data: {
        firstName: "albert", 
        lastName: "james", 
        address: "Las Vegas"
    }, 
    methods: {
        myDetails: function() {
            return "i am " + this.firstName + " " + this.lastName + this.address;
        }
    }
});