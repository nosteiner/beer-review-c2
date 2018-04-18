
var fruitsArr = [];
var ratingNow;


function addFruit(name, category, rating) {
    var fruit = {
        fruitName: name,
        fruitCategory: category,
        fruitRating: rating
    };
    fruitsArr.push(fruit);
}

function renderFruits() {
    $(".fruits-list").empty();

    for (i = 0; i < fruitsArr.length; i++) {
        var $fruitName = fruitsArr[i];
        var $fruitCategory = fruitsArr[i];
        var $fruitRating = fruitsArr[i];
        $('.fruits-list').append($('<li></li>').append($fruitName["fruitName"], ", ", "rating: " + $fruitRating["fruitRating"]));
    }
}

$('.star').on("click", function () {
    var temp = $(this).attr('id')
    ratingNow = temp;
    
    $(".star").css("color", "black").html('☆')
    
    for (i = temp; i > 0; i--) {
        $("#"+i).css("color", "gold").html('★');
    }
})


var clicked = function () {

    var name = $('#name').val();
    var category = $('#category').val();
    var rating = ratingNow;


    addFruit(name, category, rating);
    renderFruits();
    //clear stars
    $(".star").css("color", "black").html('☆');;
    ratingNow = 0;

}
$('button').click(clicked);


// for(i=1;i<6;i++){
//     document.getElementById(i).style.color = "red";
// }


