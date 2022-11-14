var app = new Vue({
    el: "#app", 
    data: {
        message: "this is sample vuejs declarative rendering example!"
    }
});

var app2 = new Vue({
    el: "#app-2", 
    data: {
        message: "you loaded this page: " + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app3", 
    data: {
        seen: false
    }
});

var app4 = new Vue({
    el: "#app4", 
    data: {
        todos: [
            { text: "Java" }, 
            { text: "MongoDb" }, 
            { text: "Spring Boot" }, 
            { text: "Maven" }
        ]
    }
});

var app5 = new Vue({
    el: "#app5", 
    data: {
        message: "this is normal message"
    }, 
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("");
        }
    }
});

var app6 = new Vue({
    el: "#app6", 
    data: {
        message: "two way data binding"
    }
});