window.onload = function () {
  $("#design").hide();
  $("#development").hide();
  $("#analytics").hide();
  $("#nairobi-bridge-overlay").hide();
  $("#china-bridge-overlay").hide();
  $("#japan-bridge-overlay").hide();
  $("#mexico-bridge-overlay").hide();

  $("#nairobi-bridge")
    .mouseover(function () {
      $("#nairobi-bridge-overlay").show();
    })
    .mouseout(function () {
      $("#nairobi-bridge-overlay").hide();
    });

  $("#japan-bridge")
    .mouseover(function () {
      $("#japan-bridge-overlay").show();
    })
    .mouseout(function () {
      $("#japan-bridge-overlay").hide();
    });

  $("#china-bridge")
    .mouseover(function () {
      $("#china-bridge-overlay").show();
    })
    .mouseout(function () {
      $("#china-bridge-overlay").hide();
    });

  $("#mexico-bridge")
    .mouseover(function () {
      $("#mexico-bridge-overlay").show();
    })
    .mouseout(function () {
      $("#mexico-bridge-overlay").hide();
    });

  $("#contact-form").submit(function (event) {
    // event.preventDefault();
    var name = $("#txtName").val();
    var email = $("#txtEmail").val();
    var message = $("#txtMsg").val();
    var phone = $("#txtPhone").val();
    if ($("#txtName").val() && $("#txtEmail").val()) {
      alert(
        "Dear " +
          name +
          ", we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please enter your name and email!");
    }
  });
};

function toggleDesign() {
  if (!$("#design").is(":visible")) {
    $("#design").slideToggle();
  } else {
    $("#design").hide("1500");
  }
}

function toggleDevelopment() {
  if (!$("#development").is(":visible")) {
    $("#development").slideToggle();
  } else {
    $("#development").hide("1500");
  }
}

function toggleAnalytics() {
  if (!$("#analytics").is(":visible")) {
    $("#analytics").slideToggle();
  } else {
    $("#analytics").hide("1500");
  }
}
