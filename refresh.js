let server = location.href.split("?")[1];
if (server != undefined && !location.href.endsWith("?")) {
    location = "steam://connect/" + server;
} 