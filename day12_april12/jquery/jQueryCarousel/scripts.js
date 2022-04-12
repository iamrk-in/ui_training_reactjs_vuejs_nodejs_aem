jQuery(function($) {
    var slider = $("#jquery-slideshow"), // cache the slide object
        item_width = slider.parent().outerWidth(), // get the width of the container
        timer = null; // will reference autoplay() timer

    // adjust the slider when / if the window gets resized
    $(window).on("resize", adjust);
    adjust();

    // we have more than one slide, 
    // lets add the pagination buttons 
    if(slider.children("li").length > 1) {
        // add prev / next buttons
        slider.parent().append("<a href=\"#\" id=\"btn-prev\"><i class=\"fa fa-angle-left\"></i><span>Previous</span></a><a href=\"#\" id=\"btn-next\"><i class=\"fa fa-angle-right\"></i><span>Next</span></a>");

        // handle clicks on the next button
        slider.parent().on("click", "a#btn-prev", function(e) {
            e.preventDefault();

            slider.children("li:last").prependTo(slider);
            slider.css("left", -item_width);

            slider.animate({
                left: 0
            }, 300, "swing");
        });

        // handle clicks on the previous button
        slider.parent().on("click", "a#btn-next", function(e) {
            e.preventDefault();

            slider.animate({
                left: -item_width
            }, 300, "swing", function() {
                slider.children("li:first").appendTo(slider);
                slider.css("left", 0);
            });
        });


        // autoplay slider
        document.addEventListener("visibilitychange", function() {
            if("undefined" !== typeof document.hidden && document.hidden) {
                clearInterval(timer);
                timer = null;
            } else {
                autoplay();
            }
        }, false);

        // pause / resume autoplay on hover in/out
        slider.hover(function() {
            if(timer) {
                clearInterval(timer);
                timer = null;
            }
        }, function() {
            autoplay();
        });

        // autoplay
        function autoplay() {
            if($("a#btn-next").length) {
                timer = setInterval(function() {
                    $("a#btn-next").trigger("click")
                }, 3000);
            }
        }
    }

    // adjust 
    function adjust() {
        item_width = slider.parent().outerWidth();
        slider.children("li").width(item_width).parent().width(item_width * slider.children("li").length);
    }
});