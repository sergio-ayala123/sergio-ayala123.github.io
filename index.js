window.addEventListener("load", function() {

    var item= document.querySelector("#center");
    item.addEventListener("click", function(e){


        if(e.target.nodeName.toLowerCase() == 'input'){
            var clicked = e.target;
            alert(clicked);
        }

    })

});

var d = new Date();



function addRow() {
    var table = document.getElementById("center");
    var x = document.getElementById("item").value
    var t = document.getElementById("time")


    

    if(x.length == 0){
       // alert(d.getHours());
        alert(d.getMinutes());

    }
    else {
        
        var row = table.insertRow(table.length);
        var cell = row.insertCell(table.length);
        cell.innerHTML = x + " <button >X</button><br>" + t.value;
        
    }
}

