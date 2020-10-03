  
function submitInfo() {
    var userName = $("#userName").val();
    var userMobile = $("#userMobile").val();
    var userRoll = $("#userRoll").val();
    var userAddress = $("#userAddress").val();
    var userEmail = $("#userEmail").val();

    $("#info").empty();
    
    displayInformation(userName,userMobile,userRoll,userAddress,userEmail);
}
function displayInformation(userName,userMobile,userRoll,userAddress,userEmail){
    $("#info").append('<li>Name: ' + userName + '</li>');
    $("#info").append('<li>Mobile number: ' + userMobile + '</li>');
    $("#info").append('<li>Roll Number: ' + userRoll + '</li>');
    $("#info").append('<li>Address: ' + userAddress + '</li>');
    $("#info").append('<li>Email id: ' + userEmail + '</li>');
}

