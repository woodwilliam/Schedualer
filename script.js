var saveBtn = $("#save");
// getting the date and time for the moment the page is rendered
let dateRightNow = dayjs().format("dddd, MMMM DD, YYYY");
let timeRightNow = dayjs().format("h:mm a");
let hourValue = dayjs().hour();
$("#nowDay").text(dateRightNow);
$("#nowTime").text(timeRightNow);

$(document).ready(function () {
    $("#theGreatDeleter").on("click", function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
    saveBtn.on("click", function () {
      let = textiscle = $(this).siblings(".description").val();
      let = postTime = $(this).parent().attr("id");
      localStorage.setItem(postTime, textiscle);
    });
      
function timeyWimey() {
  $(".time-block").each(function () {
    let hrVal = parseInt($(this).attr("id").split("-")[0]);
    console.log(hourValue);
    console.log(hrVal);
    if (hrVal > hourValue) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else if (hrVal < hourValue) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (hrVal === hourValue) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
})};

  $("#9-time .description").val(localStorage.getItem("9-time"));
  $("#10-time .description").val(localStorage.getItem("10-time"));
  $("#11-time .description").val(localStorage.getItem("11-time"));
  $("#12-time .description").val(localStorage.getItem("12-time"));
  $("#13-time .description").val(localStorage.getItem("13-time"));
  $("#14-time .description").val(localStorage.getItem("14-time"));
  $("#15-time .description").val(localStorage.getItem("15-time"));
  $("#16-time .description").val(localStorage.getItem("16-time"));
  $("#17-time .description").val(localStorage.getItem("17-time"));
  $("#18-time .description").val(localStorage.getItem("18-time"));
  $("#19-time .description").val(localStorage.getItem("19-time"));
  $("#20-time .description").val(localStorage.getItem("20-time"));
  $("#21-time .description").val(localStorage.getItem("21-time"));
  $("#22-time .description").val(localStorage.getItem("22-time"));
  $("#23-time .description").val(localStorage.getItem("23-time"));

  timeyWimey();
});
