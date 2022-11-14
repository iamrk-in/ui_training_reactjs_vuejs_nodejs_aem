var dc = new Vue({
    el: "#databinding", 
    data: {
        view: 'component1'
    }, 
    components: {
        'component1': {
            template: '<div>This is <span style="font-size: 24px; color: blue;">Dynamic Component</span></div>'
        }
    }
});