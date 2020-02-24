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

// $("li").click(function () {
//     $(this).toggleClass("completed");
// });

//*ensuring the newly added todos also turn grey, line-through */
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


// $("li span").click(function (event) {
//     // $(this).parent().css("display", "none");
//     // $(this).parent().remove();
//     $(this).parent().fadeOut(500, function () {
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

//*ensuring the newly added todos can also be deleted
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});



//listener to the input
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing the new todo
        let newTodo = $(this).val();
        //empty the span once finsihed new todo
        $(this).val("");
        //create a new li and add to the ul
        //$("ul").append("<li><span>X</span> " + newTodo + "</li>")

        // Refactoring the above with template literals
        $("ul").append(`<li><i class="fas fa-trash-alt" style="color: red"></i> ${newTodo} </li>`);
    }
});