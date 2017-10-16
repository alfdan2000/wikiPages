$(document).ready(function () {

    $("#searchButton").click(function () {
        $('#searchingInput').css("visibility", "visible");
        $('#searchingimage').css("visibility", "hidden");
        
    });
});

function buttonPressed() {
    if (event.keyCode == 13) {
        searchItem();
    }

}

function searchItem() {
    $('.results').css("visibility", "visible");
    $('#resultDescr').css("visibility", "visible");
    var item = $('#inputbox').val().toString();
    console.log(item);
    

    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + item + "&format=json&callback=?";
    
    $.getJSON(wikiUrl, function (data) {
        //$('#results').empty();
        for (var x = 0; data[1][x] != null; x++) {
            jQuery('<div/>', {
                "id": x,
                "class": " w3-row"
            }).appendTo('#results');

            
            var name = document.createElement('a');
            var description = document.createElement('p');
            name.innerHTML = data[1][x];
            name.className = "w3-col m4 l3 results"
            description.innerHTML = data[2][x];
            description.className = "w3-col m8 l6 results"
            
            document.getElementById(x).appendChild(name);
            document.getElementById(x).appendChild(description);
        }
    })
}

