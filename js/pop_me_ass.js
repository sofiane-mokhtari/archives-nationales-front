var aj = new ajax;
var title = location.search.split('=')[1];
ajax.rqt_get("localhost:5000/get_one_discours/".concat(title));
console.log(ajax);