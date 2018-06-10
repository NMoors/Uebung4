function onSubmit (){
    console.log("2");

if(testeHausnummer()&& testePostleitzahl() ) document.getElementById("Err").innerHTML = "";
gibLebensdauer();
}

window.onload = function(){
    document.getElementById("Submit").onclick = onSubmit;
    console.log("1");
}

function testePostleitzahl(){
    console.log("3");
    var e=document.getElementById("Postleitzahl");
    var regex= /^[0-9]{5}\b/g;
    
    var res = regex.test(e.value);
    console.log(res);

    if(res == false) document.getElementById("Err").innerHTML = "Postleitzahl stimmt nicht";
    else document.getElementById("Err").innerHTML = "";
    return res;
}

function testeHausnummer(){
    var e=document.getElementById("Hausnummer");
    var regex= /^[0-9]{1,3}[a-zA-Z]{0,1}\b/g
    var res = regex.test(e.value);
    if(res == false) document.getElementById("Err").innerHTML = "Hausnummer stimmt nicht";
    else document.getElementById("Err").innerHTML = "";
    return res;
}

function testeEmail(){
    var e=document.getElementById("E-Mail");
    var regex= /^[a-zA-Z]{3,20}@[a-z]{3-9}.[a-z]{2,3}\b/g
    var res = regex.test(e.value);
    if(res == false) document.getElementById("Err").innerHTML = "E-Mail stimmt nicht";
    else document.getElementById("Err").innerHTML = "";
    return res;
}

// function testeGeburstag(){
//     var e=document.getElementById("Geburtstag");
//     var today = new Date();
//     if (e.value == today)  document.getElementById("Err").innerHTML = "Geburtstag stimmt nicht";
//     else document.getElementById("Err").innerHTML = "";
// }

function gibLebensdauer(){
    var e = document.getElementById("Geburtstag");
    var date = new Date(e.value);
    var today = new Date();
    var sec = (today.getTime() - date.getTime()) /1000;
    var we = Math.floor(sec / (7*86400));
    var day = Math.floor((sec - (we*86400*7)) / 86400);
    var rest = Math.floor(sec - ((day*86400)+(we*86400*7)));
    document.getElementById("Alter").innerHTML = "Wochen: " + we + " Tage: " + day + " Sekunden: " + rest ;
}
