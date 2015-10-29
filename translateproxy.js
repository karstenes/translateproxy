function proxy(){
	window.location.href = "http://translate.google.com/translate?sl=ja&tl=en&u="+prompt("Enter URL");
}
window.onload = proxy()