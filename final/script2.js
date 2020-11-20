

$(document).ready(function(){
    $("#b1").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("#b2").click(function(){
        $("p").show();
    });
});





var data = '{ "name": "gurtek", "age": 18, "city": "Montreal"}';
var object =JSON.parse(data);

 $("#demo").html("<h3> name:" + object.name + "<br> age:" + object.age + "<br> city:" + object.city + 
    "</h3>" );