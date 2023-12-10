var workingHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
var containerEl = $('.container')


// displays the current date
var todayDate = dayjs();
$("#currentDay").text(todayDate.format("dddd" + ", " + "MMMM DD"));

// generate blocks for each working hour
for (let i = 0; i < workingHours.length; i++) {
    var timeBlock = $('<section>').addClass('time-block row p-2');;
    var hour = $('<div>').text(workingHours[i]).addClass('hour col p-2');
    var textBlock = $('<div>').text('Empty').addClass('textarea col-8');
    var saveBtn = $('<button>').addClass('saveBtn col');
    var saveBtnIcon = $('<i>').addClass('fa fa-save');

    saveBtn.append(saveBtnIcon);
    timeBlock.append(hour, textBlock, saveBtn);
    containerEl.append(timeBlock)

    // store the current time
    var timeNow = dayjs().format('ha')
    var blockTime = hour.text()
    
    // reference against block's hour
    if (timeNow === blockTime) {
        textBlock.addClass('present');
    } else if (timeNow > blockTime) {
        textBlock.addClass('past');
    } else if (timeNow < blockTime) {
        textBlock.addClass('future');
    } else {
        console.log("none")
    }

}


