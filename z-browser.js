function z_check(url){
    var request = new XMLHttpRequest();  
request.open('GET', url, true);
request.onreadystatechange = function(){
    if (request.readyState === 4){
        if (request.status === 404) {  
            return 0;
        }else{
            return 1;
        }  
    }
};
request.send();
}
