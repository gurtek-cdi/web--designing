function submitInfo() {
    let firstName = $("#first").val();
    let lastName = $("#last").val();
    let phone = $("#phone").val();
    let stId = $("#stId").val();
    let address = $("#address").val();
    let age = $("#age").val();
    let car = $(".radio-btn:checked").val();
    let gender = $( "#select option:selected" ).val();
    let status = $( "#select option:selected" ).val();
    $("#form").submit(function(e){
    e.preventDefault();
  });
    $("#informationBoard").empty();
    displayInformation(firstName, lastName, phone, stId, address, age, car, gender, status);
    return false;
}

function displayInformation(firstName, lastName, phone, stId, address, age, car, gender, status) {
    $("#informationBoard").append('<li>First Name: ' + firstName + '</li>');
    $("#informationBoard").append('<li>Last Name: ' + lastName + '</li>');
    $("#informationBoard").append('<li>Phone Number: ' + phone + '</li>');
    $("#informationBoard").append('<li>Student Id: ' + stId + '</li>');
    $("#informationBoard").append('<li>Address: ' + address + '</li>');
    $("#informationBoard").append('<li>Age: ' + age + '</li>');
    $("#informationBoard").append('<li>Have a car?: ' + car + '</li>');
    $("#informationBoard").append('<li>Gender: ' + gender + '</li>');
    $("#informationBoard").append('<li>Martial status: ' + status + '</li>');
}