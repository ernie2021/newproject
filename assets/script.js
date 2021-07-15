//timestamp element
var timeStampEl = document.querySelector("#timeStamp");
//Function that prints the time to the p element
function setTime() {
    var currentTime = moment().format("MMM D, YYYY [at] hh:mm:ss");
    timeStampEl.textContent = currentTime
}
//interval for updating time
setInterval(setTime, 1000);