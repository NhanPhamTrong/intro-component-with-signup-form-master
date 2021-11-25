var claimButton = $("#claim-button");
var emailAddress = $("#email");
var errorNote = $(".form-text");
var firstName = $("#first-name");
var lastName = $("#last-name");
var password = $("#password");

var needInput = [firstName, lastName, emailAddress, password];
var placeholder = [];

for (var i = 0; i < needInput.length; i++) {
  placeholder.push(needInput[i].attr("placeholder"));
}

function ChangeScreenWidth() {
  if ($(window).width() <= 375) {
    $(".container.p-5").addClass("py-5 px-4").removeClass("p-5");
    $(".col.p-5").addClass("p-2").removeClass("p-5");
    $("#form").addClass("p-0").removeClass("p-4");
    $(".form-control").removeClass("px-5");
  }
  else {
    $(".container.py-5.px-4").addClass("p-5").removeClass("py-5 px-4");
    $(".col.p-2").addClass("p-5").removeClass("p-2");
    $("#form").addClass("p-4").removeClass("p-0");
    $(".form-control").addClass("px-5");
  }
}

function CheckEmail() {
  console.log(emailAddress.val());
  var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(emailRegex.test(emailAddress.val())) {
    emailAddress.removeClass("error email-form").attr("placeholder", placeholder[2]);
    return;
  }
  else {
    emailAddress.addClass("error email-form").attr("placeholder", "email@example/com").val("");
    $("#email-error").show();
  }
}

function CheckInput() {
  for (var i = 0; i < needInput.length; i++) {
    if (needInput[i].val() == "") {
      needInput[i].addClass("error").attr("placeholder", "");
      $("#" + needInput[i].attr("id") + "-error").show();
    }
    else {
      needInput[i].removeClass("error").attr("placeholder", placeholder[i]);
      $("#" + needInput[i].attr("id") + "-error").hide();
    }
  }
}

ChangeScreenWidth();
$(window).resize(ChangeScreenWidth);

errorNote.hide();

claimButton.click(function() {
  CheckInput();
  CheckEmail();
});
