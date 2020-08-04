function set_down()
{
    document.getElementById("S").src = "high-level.png";
    document.getElementById("Q").src = "high-level.png";
    document.getElementById("!Q").src = "low-level.png";
}

function set_up()
{
    document.getElementById("S").src = "low-level.png";
}

function reset_down()
{
    document.getElementById("R").src = "high-level.png";
    document.getElementById("Q").src = "low-level.png";
    document.getElementById("!Q").src = "high-level.png";
}

function reset_up()
{
    document.getElementById("R").src = "low-level.png";
}
