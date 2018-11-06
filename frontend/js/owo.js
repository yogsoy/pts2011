function loadStock() {
    var data;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("text").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://14.2.161.34:981", true);
    xhttp.send();
}