var title = "http://127.0.0.1:8000/get_one_discours/".concat(location.search.split('=')[1]);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', title, true);

request.onload = function () {
    console.log(this.response)
  }

// Send request
request.send();
