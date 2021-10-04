$(document).ready(function (){
    $(".active-element").addClass("active");

    $(".nav-item").click(function (){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#toggler").click(function(event){
        $("#wrap").toggleClass('toggled');
        var right = $(".sidebar").css("right")
        if (right == "0px")
        {
            $(".sidebar").css({"right": "-25rem"});
            $(".layer").fadeOut();/*إخفاء الطبقة السوداء */
        }
        else{
            $(".sidebar").css({"right" : "0"});
            $(".layer").fadeIn();/** إظهار الطبقة السوداء */
        }
        /* إخفاء الطبقة السوداء عن الضغط عليها*/
        $('.layer').click(function () {
            $('.sidebar').css({ 'right': '-25rem' });
            $('.layer').fadeOut();
        });
    
    });
    $(".search-icon").click(function(){
        $(".search-input").slideToggle("slow");
    });

});