function onSubmit (){

var name = document.getElementById("name").value;
console.log(name);
}
window.onload = function(){
    document.getElementById("submit").onclick = onSubmit;
}