var REQUEST_PERIOD = 600;

function getNewMessageBreak(){

    // Break Case.
    var user_case = 'break';
    var param = '?case=' + user_case;
    var url = "get_next_message" + param;
    $.get(url, function(data){
        if (data != ""){
            new_line = "<p>" + data + "</p>"
            var div_name = '#'+ user_case + '_messages';
            var break_div = $(div_name);
            break_div.append(new_line);
            break_div[0].scrollTop = break_div[0].scrollHeight;
        }
    });
}

function getNewMessageGear(){

    // Gear Case.
    var user_case = 'gear';
    var param = '?case=' + user_case;
    var url = "get_next_message" + param;
    $.get(url, function(data){
        if (data != ""){
            new_line = "<p>" + data + "</p>"
            var div_name = '#'+ user_case + '_messages';
            var break_div = $(div_name);
            break_div.append(new_line);
            break_div[0].scrollTop = break_div[0].scrollHeight;
        }
    });

}