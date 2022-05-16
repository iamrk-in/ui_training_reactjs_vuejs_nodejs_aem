Vue.component('todo-course', {
    props: ['todo'], 
    template: '<li>{{todo.text}}</li>'
});

var app = new Vue({
    el: "#app", 
    data: {
        courseList: [
            { id: 0, text: "Php" }, 
            { id: 1, text: "Java" }, 
            { id: 2, text: "Angular" }, 
            { id: 3, text: "VueJs" }
        ]
    }
});