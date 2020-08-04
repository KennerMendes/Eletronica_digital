function set_down()
{
    document.getElementById("S").src = "images/high-level.png";
    document.getElementById("Q").src = "images/high-level.png";
    document.getElementById("!Q").src = "images/low-level.png";
}

function set_up()
{
    document.getElementById("S").src = "images/low-level.png";
}

function reset_down()
{
    document.getElementById("R").src = "images/high-level.png";
    document.getElementById("Q").src = "images/low-level.png";
    document.getElementById("!Q").src = "images/high-level.png";
}

function reset_up()
{
    document.getElementById("R").src = "images/low-level.png";
}