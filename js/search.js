$(document).ready(function (){
    $(".filter").click(function (){
        $(".filter-box").slideToggle("slow");
    });
    $("input:checkbox").click(function () {
        var $selectedBox = $(this);

        if($selectedBox.is(":checked")){
            var group = "input:checkbox[name='"+ $selectedBox.attr("name") + "']";
        $(group).prop("checked",false);
        $selectedBox.prop("checked",true);

        }
    });
});