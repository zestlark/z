function z_check(){
    var request = new XMLHttpRequest();  
request.open('GET', 'http://www.mozilla.org', true);
request.onreadystatechange = function(){
    if (request.readyState === 4){
        if (request.status === 404) {  
            console.log("Oh no, it does not exist!");
        }else{
            console.log("exist")
        }  
    }
};
request.send();
}
