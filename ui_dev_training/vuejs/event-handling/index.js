var eh = new Vue({
    el: "#app", 
    data: {
        num1: 4, 
        num2: 7, 
        total: 0
    }, 
    methods: {
        displayNumbers: function(event) {
            console.log(event);
            return this.total = this.num1 + this.num2
        }
    }
});

var eh2 = new Vue({
    el: "#app2", 
    data: {
        num1: 4, 
        num2: 7, 
        total: 0
    }, 
    methods: {
        displayNumbers: function(event) {
            console.log(event);
            return this.total = this.num1 + this.num2
        }
    }
});

var eh3 = new Vue({
    el: "#databinding", 
    data: {
        num1: 100, 
        num2: 200, 
        total: 0, 
        styleobj: {
            width: "100px", 
            height: "100px", 
            backgroundColor: "red"
        }
    }, 
    methods: {
        changebgcolor: function() {
            this.styleobj.backgroundColor = "blue"
        }, 
        originalcolor: function() {
            this.styleobj.backgroundColor = "brown"
        }
    }
})