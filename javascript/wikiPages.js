$(document).ready(function () {

    $("#searchButton").click(function () {
        $('#searchingInput').css("visibility", "visible");
        $('#searchingimage').css("visibility", "hidden");
        
    });
});


function searchItem() {
    $('.results').css("visibility", "visible");
    $('#resultDescr').css("visibility", "visible");
    var item = $('#inputbox').val().toString();
    console.log(item);
    

    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + item + "&format=json&callback=?";
    
    $.getJSON(wikiUrl, function (data) {
        $('#results').empty();
        
        for (var x = 0; data[1][x] != null; x++) {
            console.log('go go');
            jQuery('<div/>', {
                "id": x,
                "class": " w3-row"
            }).appendTo('#results');
            console.log('again');
            
            var name = document.createElement('a');
            var description = document.createElement('p');
            name.innerHTML = data[1][x];
            
            name.setAttribute('href', data[3][x]);
            description.innerHTML = data[2][x];
            //name.style.backgroundColor = "rgb(205, 207, 214)";
            //name.style.color = "black";
            name.className = "w3-col m4 l3 resultsName"; 
            description.className = "w3-col m8 l9 resultsDescrip";
            
            document.getElementById(x).appendChild(name);
            document.getElementById(x).appendChild(description);
        }
    })
}

function buttonPressed() {
    if (event.keyCode == 13) {
        searchItem();
    }

}

