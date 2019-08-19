function loadStock() {
    var data;
    var data1 = "";
    var xhttp = new XMLHttpRequest();
    var stockElement = document.getElementById("stock");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            stockElement.innerHTML = "";
            data = this.responseText;
            data = data.split("<").join("&lt;");
            data = data.split(">").join("&gt;");
            data = JSON.parse(data);
            for (var i = 0, s = data[i]; i < data.length; i++, s = data[i]) {
                stockElement.innerHTML += "<div class='stock-element'><img src='/test.png'><div class='stock-title'><strong>"+s.company+"</strong></div><div class='stock-stocks'>"+s.stock_cost+"</div></div><div class='stock-pad'></div>";
            }
        }
    };
    xhttp.open("GET", "http://127.0.0.1:981", true); //url for testing rn
    xhttp.send();
}
function sendChat() {
    //var data;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //data = JSON.parse(this.responseText);
            //document.getElementById("stock").innerHTML = "<strong>"+data.t+"</strong> | "+ data.m;
        }
    };
    xhttp.open("POST", "http://127.0.0.1", true); //http://14.2.161.34:981
    xhttp.setRequestHeader("atrax-protocol", 77)
    xhttp.send();
}