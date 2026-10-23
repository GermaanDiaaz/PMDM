$(document).ready(function () {

    $("#tabla").append("<td>María</li>");

    $("li").on("click", function () {
        $(this).remove();
    });
});
