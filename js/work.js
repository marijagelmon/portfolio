var isGrid = false;

$("#grid").click(function () {
    if (isGrid == true) {
        $("#box").css("opacity", "1");
        $("#grid").css("opacity", "0");

        $("#box-container").fadeIn();
        $("#grid-container").fadeOut();
        isGrid = false;
    }
    else {
        $("#box").css("opacity", "0");
        $("#grid").css("opacity", "1");

        $("#box-container").fadeOut();
        $("#grid-container").fadeIn();
        isGrid = true;
    }
});