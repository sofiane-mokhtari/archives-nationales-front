var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
	var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
	var monfichier = fileSystem.OpenTextFile("..\\..\\text.txt", 1 ,true);
	var txt = monfichier.ReadAll();
	monFichier.Close();
	var id_to_div = getElementById("bodyy");
	bodyy.innerHTML = txt;
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
