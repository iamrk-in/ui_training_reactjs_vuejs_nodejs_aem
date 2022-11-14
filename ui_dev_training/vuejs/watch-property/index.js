var wp = new Vue({
    el: "#wat_pro", 
    data: {
        kilometers: 0, 
        meters: 0
    }, 
    methods: {}, 
    computed: {}, 
    watch: {
        kilometers: function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        }, 
        meters: function(val) {
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }
});

var wp1 = new Vue({
    el: "#wat_pro1", 
    data: { 
        firstName: "aram", 
        lastName: "param", 
        fullName: "paul john1"
    }, 
    watch: {
        firstName: function(val) {
            this.fullName = val + " " + this.lastName
        }, 
        lastName: function(val) {
            this.fullName = this.firstName + " " + val;
        }
    }
});