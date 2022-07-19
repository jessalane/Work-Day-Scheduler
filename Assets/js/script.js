// worked through with help from Jerrod Lindermann

$(init);
// sets init function when page loads
function init() {
    var momentX = moment();
    // inserting current date & day of the week
    $('#currentDay').text(momentX.format('dddd, MMMM Do'));

    setClass();
    pullStorage();

    $('.saveBtn').on('click', setStorage);

    setInterval(setClass, 1000);

}

// set the past / present / future classes based on time
function setClass() {
    $('.time-block').each(function() {
        var hourId = parseInt($(this).attr('id'));
        var currentHr = moment().format('H');

        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');

        if (hourId > currentHr) {
            $(this).addClass('future');
        } 
        else if (hourId == currentHr) {
            $(this).addClass('present');
        } 
        else {
            $(this).addClass('past');
        }
    })
}

// sets text area to local storage
function setStorage() {
    var setID = $(this).parent().attr('id');
    localStorage.setItem(moment().format('DMMM[-]YY[-hr-]') + setID, $('#' + setID + ' textarea').val());
}

//pulls objects from local storage
// function pullStorage() {
//     $('.time-block').each(function(){
//         var pullID = $(this).attr('id');
//         $('#' + pullID + ' textarea').text(localstorage.getItem(moment().format('DMMM[-]YY[-]')+ pullID));
//     });
// }

// pulls objects from local storage and sets to the right textarea
function pullStorage() {
    // gets info from timblock and loops 
    $('.time-block').each(function() {
        var pullID = $(this).attr('id');
        $('#' + pullID + ' textarea').text(localStorage.getItem(moment().format('DMMM[-]YY[-]') + pullID));
    });
}


