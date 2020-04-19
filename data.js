window.addEventListener("load", function() {

    var item= document.querySelector("#center");
    item.addEventListener("click", function(e){


        if(e.target.nodeName.toLowerCase() == 'button'){
            var clicked = e.target;
            alert(clicked);
        }

    })

});

function addRow() {
    var table = document.getElementById("center");
    var x = document.getElementById("item").value

    if(x.length == 0){
        alert("Field is empty");
    }
    else {
        var row = table.insertRow(table.length);
        var cell = row.insertCell(table.length);
        cell.innerHTML = x + "<button type = 'button'>X</button>";
    }


}

