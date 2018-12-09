var btn = document.getElementById('myBtn');
var spa = document.getElementById('div_close');

spa.onclick = function(event)
{
	var modal = document.getElementById('myModal');
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}

btn.onclick = function()
{
	console.log("fkflhdkdsf");
	var modal = document.getElementById('myModal');
	var id_to_div = document.getElementsByClassName("modal-body");
	modal.style.display = "block";
	id_to_div.innerHTML = txt;
    
}

window.onclick = function(event, txt)
{
	var modal = document.getElementById('myModal');
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
