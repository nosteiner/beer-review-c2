
var fruitsArr = [];
var ratingNow="";


function addFruit(name, category, rating) {
    //validation
    if(name===""){
        alert("please fill the name feild")        
    }
    if(category===""){
        alert("please fill the category feild")        
    }
    if(rating===""){
        alert("please rate the fruit")        
    }
//if valid create and add to array
    if(name!==""&&category!==""&&rating!==""){
        var fruit = {
            fruitName: name,
            fruitCategory: category,
            fruitRating: rating
        };
        fruitsArr.push(fruit);
    }
}

function renderFruits() {
    $(".fruits-list").empty();

    for (i = 0; i < fruitsArr.length; i++) {
        var $fruitData = fruitsArr[i];
        $('.fruits-list').append($('<li></li>').append($fruitData["fruitName"], $fruitData["fruitCategory"], "rating: " + $fruitData["fruitRating"]));
    }
}

$('.star').on("click", function () {
    var starId = $(this).attr('id') //get the rate from id
    ratingNow = starId;
    
    $(".star").css("color", "black").html('☆')
    
    for (i = starId; i > 0; i--) {
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
    ratingNow = ""; // reset rating to invalid value
}

$('button').click(clicked);

