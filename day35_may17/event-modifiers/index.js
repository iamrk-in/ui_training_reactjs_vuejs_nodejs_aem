var em = new Vue({
    el: "#em1", 
    data: {
        clicknum: 0, 
        clicknum1: 0, 
        stylobj: {
            backgroundColor: "#2a5d4e !important", 
            cursor: "pointer", 
            padding: "8px 16px", 
            verticalAlign: "middle"
        }
    }, 
    methods: {
        buttonclickedonce: function() {
            this.clicknum++;
        }, 
        buttonclicked: function() {
            this.clicknum1++;
        }
    }
});

var em2 = new Vue({
    el: "#em2", 
    data: {
        clicknum: 0, 
        clicknum1: 1, 
        stylobj: {
            color: "#4caf50", 
            marginLeft: "20px", 
            fontSize: "30px"
        }
    }, 
    methods: {
        clickme: function() {
            alert("anchor tag is clicked");
        }
    }
});

var em_key1 = new Vue({
    el: "#em_key1", 
    data: {
        name: "", 
        stylobj: {
            width: "100%", 
            padding: "12px 20px", 
            margin: "8px 0px", 
            boxSizing: "border-box"
        }
    }, 
    methods: {
        showinputvalue: function(event) {
            this.name = event.target.value;
        }
    }
});