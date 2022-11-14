Vue.component('testcomponent', {
    template: '<div v-on:mouseover="changename()" v-on:mouseout="originalname()"><h1>this is a component is created by <span id="name">{{name}}</span></h1></div>', 
    data: function() {
        return {
            name: "Smith"
        }
    }, 
    methods: {
        changename: function() {
            this.name = "Alexa";
        }, 
        originalname: function() {
            this.name = "Smith"
        }
    }
});


var vm = new Vue({
    el: "#component_test1", 
    components: {
        'testcomponent': {
            template: '<div><h1>this is a local registration component</h1></div>'
        }
    }
});

// var vm1 = new Vue({
//     el: "#component_test2"
// });

var vm2 = new Vue({
    el: "#component_test3"
});
