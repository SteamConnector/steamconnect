// ad-free scripting!
var link = window.location.href
var server = link.split("?")[1];
if (server != undefined && !link.endsWith("?")) {
    window.location = "steam://connect/" + server; 
    var refresh = '<meta http-equiv="refresh" content="0;url=' + window.location + '">';
    document.write(refresh);
} 