var ctx = document.getElementById('myChart').getContext('2d');

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}


// var client = new HttpClient();
// client.get('http://some/thing?with=arguments', function(response) {
//     // do something with response
// });

var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ["1990", "1991", "1992", "1993", "1994", "1995", "July"],
    datasets: [{
        label: "FRANCE",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Guerre",
      backgroundColor: 'rgb(200, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 110, 5, 2, 20, 30, 45],
    },
    {
      label: "Emploie",
      backgroundColor: 'rgb(150, 20, 150)',
      borderColor: 'rgb(50, 99, 50)',
      data: [30, 40, 60, 65, 67, 90, 92],
    }
  ]
},

// Configuration options go here
options: {}
})
