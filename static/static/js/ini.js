function parseCustomToUTC(s) {
    var datevals = s.split('.');
    var date = new Date(datevals[2], (datevals[1]-1), datevals[0]);
    return (date.setUTCSeconds(0));
}

function ShowCal(data) {
    var now = (new Date()).setUTCSeconds(0);
	var termine = data.termine;
	var events = 0;
    for (var i in termine) {
        if (parseCustomToUTC(termine[i].Datum) > (now-2*86400000)) {
			console.log(parseCustomToUTC(termine[i].Datum) +": " + (now-86400000))
            $('#ini-calendar > tbody').append("<tr><td>" + termine[i].Datum + "</td>"+
                                     "<td>" + termine[i].Uhrzeit + "</td>"+
                                     "<td>" + termine[i].name + "</td>"+
                                   "</tr>");
			events++;
        }
    }

	if (events != 0) {
	 $('#calendar').show() 
	}

}

$.getJSON("static/js/termine.json", ShowCal);

//ShowCal();
