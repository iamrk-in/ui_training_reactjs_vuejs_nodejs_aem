var cp = new Vue({
    el: "#com_props", 
    data: {
        message: "Hello John"
    }, 
    computed: {
        reversedMessage: function() {
            return this.message.split("").reverse().join("")
        }
    }
});

var cp2 = new Vue({
    el: "#com_props2", 
    data: {
        firstname: "", 
        lastname: ""
    }, 
    computed: {
        getfullname: function() {
            return this.firstname + " " + this.lastname
        }
    }
});

var cp3 = new Vue({
    el: "#com_props3", 
    data: {
        name: "helloworld"
    }, 
    methods: {
        getrandomno1: function() {
            return Math.random();
        }
    }, 
    computed: {
        getrandomno: function() {
            return Math.random();
        }
    }
});

var cp4 = new Vue({
    el: "#com_props4", 
    data: {
        firstName: "alex", 
        lastName: "adam"
    }, 
    methods: {}, 
    computed: {
        fullname: {
            get: function() {
                return this.firstName + " " + this.lastName 
            }, 
            set: function(name) {
                var fname = name.split(" ");
                this.firstName = fname[0];
                this.lastName = fname[1];
            }
        }
    }
});