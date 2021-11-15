document.getElementsByTagName('body')[0].innerHTML+="<iframe id='zmanage' style='display:none;'></iframe>";
var zvisit = sessionStorage.getItem('zvisit');
if (zvisit == 'true') {
				alert('true');
}else{
sessionStorage.setItem('zvisit','true');
var zhost = location.hostname;
document.getElementById('zmanage').src="manage/zphp.php?z="+zhost;
}
