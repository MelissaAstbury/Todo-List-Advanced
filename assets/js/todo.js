//CHeck off todo's by clicking

// $("li").click(function () {
//     //If li is grey
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     //else
//     else {
//         //turn it grey
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through"
//         });
//     }
// });

//REFACTORING THE ABOVE

$("li").click(function () {
    $(this).toggleClass("completed");
});

$("li span").click(function (event) {
    // $(this).parent().css("display", "none");
    // $(this).parent().remove();
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
});