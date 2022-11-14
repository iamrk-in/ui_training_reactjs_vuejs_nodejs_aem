Vue.component('button-counter', {
    template: '<button v-on:click="displayLanguage(item)"><span style="font-size: 25px">{{item}}</span></button>', 
    data: function() {
        return {
            counter: 0
        }
    }, 
    props: ['item'], 
    methods: {
        displayLanguage: function(lng) {
            console.log(lng);
            this.$emit('showlanguage', lng)
        }
    }
});

var ce1 = new Vue({
    el: "#ce1", 
    data: {
        languageclicked: "", 
        languages: [
            "Java", 
            "AEM", 
            "Spring", 
            "ReactJs", 
            "Angular"
        ]
    }, 
    methods: {
        languagedisp: function(a) {
            this.languageclicked = a
        }
    }
})