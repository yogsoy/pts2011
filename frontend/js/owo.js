function loadStock() {
    var data;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            document.getElementById("stock").innerHTML = "<strong>"+data.t+"</strong> | "+ data.m;
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