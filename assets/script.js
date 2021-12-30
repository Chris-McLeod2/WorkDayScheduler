var saveBtn=$(".saveBtn")

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

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

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text()
    var plan = $(this).siblings(".plan").val()
    localStorage.setItem(time, plan);
})

function planner() {
    $(".hour").each(function() {
        var currentHour = $(this).text()
        var currentPlan = localStorage.getItem(currentHour)

        if (currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan)
        }
    })
}


timeBlockColor()
planner()