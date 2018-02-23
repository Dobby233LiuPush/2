
var Rep;

function main()
{
    alert("it is beta")
Rep = JSON.parse(httpGet());
    document.write("Minecraft.net is: " + Rep.minecraft.net + "\n")
    document.write("Minecraft session is: " + Rep.session.minecraft.net)
    
}
main()

function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "status.mojang.com/check", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
