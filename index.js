var Rep;

function main()
{
Rep = httpGet()
    Document.write("Minecraft.net is: " + Rep.minecraft.net + "\n")
    Document.write("Minecraft session is: " + Rep.session.minecraft.net)
    alert("it is beta")
}

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "status.mojang.com/check", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
