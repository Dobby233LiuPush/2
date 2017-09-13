var Rep;

function maim()
{
Rep = httpGet()
    Document.write("Minecraft.net is: " + Rep.minecraft.net)
}

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", https://status.mojang.com/check, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
