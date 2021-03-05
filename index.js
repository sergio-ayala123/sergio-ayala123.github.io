
window.addEventListener("load", function() {

    var item= document.querySelector("#center");
    item.addEventListener("click", function(e){
        // REMOVES TASK FROM LIST WHEN X BUTOTN IS PRESSED
        if(e.target.nodeName.toLowerCase() == 'button'){
             var clicked = e.target.parentNode;
                if(clicked.nodeName.toLowerCase() == 'td'){
                    clicked.remove(); 
            }
        }
        // ******************************************************

s


    })

});


function addRow() {
    var table = document.getElementById("center");
    var x = document.getElementById("item").value
    var t = document.getElementById("time")

    if(x.length == 0){
       // alert(d.getHours());
        alert(d.getMinutes());
    }  
    else {       
        testintadsf
        var row = table.insertRow(table.length);
        var cell = row.insertCell(table.length);
        cell.innerHTML = x + " <button >X</button><br>" + t.value;        
    }
}

