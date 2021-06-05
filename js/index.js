var firstName, lastName, emailAddress, password;


// Save user's input to variables
$("input").change(function(event){
  console.log(event.target.value);
  switch(event.target.id) {
    case "First":
      firstName = event.target.value;
      break;

    case "Last":
      lastName = event.target.value;
      break;

    case "Email":
      emailAddress = event.target.value;
      break;

    case "Password":
      password = event.target.value;
      break;
  }
});


// After clicking "CLAIM YOUR FREE TRIAL" (or Enter)
$("form").submit(function( event ) {
  checkOthers("First", firstName);
  checkOthers("Last", lastName);
  checkEmailForm(emailAddress);
  checkOthers("Password", password);
  event.preventDefault();
});


// Check form of Email Address
function checkEmailForm(emailAddress){
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress)){
    return (true);
  }
    $("#Email").addClass("wrong-input new-placeholder");
    $("span.Email").text("Looks like this is not an email").show();
    $(".svg-error.Email").html("<svg class='svg' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#FF7979' cx='12' cy='12' r='12' /><rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' /><rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' /></g></svg>");
    $("#Email").attr("placeholder", "email@example/com");
    return (false);
}


// Check if the blanks are filled or not
function checkOthers(id, value){
  if (typeof(value) === "undefined") {
    $("#" + id).addClass("wrong-input new-placeholder");
    $("span." + id).text($("#" + id).attr("name") + " cannot be empty").show();
    $(".svg-error." + id).html("<svg class='svg' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#FF7979' cx='12' cy='12' r='12' /><rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' /><rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' /></g></svg>");
    $("#" + id).attr("placeholder", "");
    return(false);
  }
  else {
    return (true);
  }
}
