const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let a = this.responseText;
    alert(a);
    }
  xhttp.open("GET", "http://zestlark.ml/fun/dashboard/z.php?name=deep", true);
  xhttp.send();
