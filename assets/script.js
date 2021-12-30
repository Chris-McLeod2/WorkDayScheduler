var saveBtn=$(".saveBtn")

//call for date at top of page with jquery/moment
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//function for color coding functionality
function timeBlockColor() {
    var hour = moment().hours();

    $(".plan").each(function() {
        var currentHour = parseInt($(this).attr("id"));
console.log(this)
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//function for save button functionality
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text()
    var plan = $(this).siblings(".plan").val()
    localStorage.setItem(time, plan);
})

//function for text to persist with reloading
function planner() {
    $(".hour").each(function() {
        var currentHour = $(this).text()
        var currentPlan = localStorage.getItem(currentHour)

        if (currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan)
        }
    })
}

//call functions
timeBlockColor()
planner()