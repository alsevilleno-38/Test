import $ from "jquery";
import "../sass/contact.scss"

$(".direction-btn").on("click", function (e) {
    let btn_j = $(this);
    let direction_type = btn_j.attr("id");
    let container_j = $(".container");
    let num_items = container_j.children().length;
    let currentNum = parseFloat(container_j.attr("data-item"));
    let afterNum;
    let passed = false;
    if (direction_type == "next" && currentNum < num_items) {
        afterNum = currentNum + 1;
        passed = true;
    }
    else if (direction_type == "previous" && currentNum > 1) {
        afterNum = currentNum - 1;
        passed = true;
    }
    console.log(direction_type);
    if (passed) {
        console.log("passed");
        $(".direction-btn").css("pointer-events", "none");
        $(".container").animate({
            scrollLeft: (afterNum - 1) * 480
        }, 1000, function () {
            
            // console.log(nextNum);
            // console.log($(this));
            $(this).attr("data-item", afterNum);
            if (direction_type == "next" && afterNum >= num_items) {
                $(".direction-btn#next").css("pointer-events", "none");
            }
            else {
                $(".direction-btn#next").css("pointer-events", "auto");
            }
            if (direction_type == "previous" && afterNum == 1) {
                $(".direction-btn#previous").css("pointer-events", "none");
            }
            else {
                $(".direction-btn#previous").css("pointer-events", "auto");
            }
        });    
    }    
})
