class ajax
{
	
	constructor()
	{
		var	xhr
		if (window.XMLHttpRequest || window.activeXObject)
		{
			if (window.activeXObject)
			{
				try
				{
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch
				{
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
			}
			else
			{
				xhr = new XMLHttpRequest();
			}
		}
		this.xhr = xhr;
	}

	rqt_get(adr)
	{
		this.xhr.open("GET", adr, true);
		this.xhr.send(null);
	}

	rqt_post(adr, vrb)
	{
		this.xhr.open("POST", adr, true);
		this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		this.xhr.send(vrb);
	}
}