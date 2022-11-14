var db = new Vue({
    el: "#databinding", 
    data: {
        title: "data binding concept", 
        hreflink: "https://www.google.com", 
        isActive: true, 
        hasError: true, 
        activeClass: true,
        infoClass: 'info',  
        errorClass: 'displayError', 
        activeColor: 'red', 
        fontSize: 30, 
        styleObject: {
            color: 'cyan', 
            fontSize: '15px'
        }
    }
});