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

$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown("1500").hide("1000");
    $("#development").show("1500");
  });
  $("#development").click(function () {
    $("#development").slideUp("1500");
    $("#development-image").slideDown("1500");
  });
});

$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown("1500").hide("1000");
    $("#design").show("1500");
  });
  $("#design").click(function () {
    $("#design").slideUp("1500");
    $("#design-image").slideDown("1500");
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown("1500").hide("1000");
    $("#product").show("1500");
  });
  $("#product").click(function () {
    $("#product").slideUp("1500");
    $("#product-image").slideDown("1500");
  });
});

$(document).ready(function () {
  $("#work1")
    .mouseover(function () {
      $("#overlay").show();
    })
    .mouseout(function () {
      $("#overlay").hide();
    });
});
$(document).ready(function () {
  $("#work2")
    .mouseover(function () {
      $("#overlay2").show();
    })
    .mouseout(function () {
      $("#overlay2").hide();
    });
});
$(document).ready(function () {
  $("#work3")
    .mouseover(function () {
      $("#overlay3").show();
    })
    .mouseout(function () {
      $("#overlay3").hide();
    });
});
$(document).ready(function () {
  $("#work4")
    .mouseover(function () {
      $("#overlay4").show();
    })
    .mouseout(function () {
      $("#overlay4").hide();
    });
});

$(document).ready(function () {
  $("#work5")
    .mouseover(function () {
      $("#overlay5").show();
    })
    .mouseout(function () {
      $("#overlay5").hide();
    });
  $("#work6")
    .mouseover(function () {
      $("#overlay6").show();
    })
    .mouseout(function () {
      $("#overlay6").hide();
    });
  $("#work7")
    .mouseover(function () {
      $("#overlay7").show();
    })
    .mouseout(function () {
      $("#overlay7").hide();
    });
  $("#work8")
    .mouseover(function () {
      $("#overlay8").show();
    })
    .mouseout(function () {
      $("#overlay8").hide();
    });
});

$(document).ready(function () {
  $("form#form34A").submit(function (event) {
    // event.preventDefault();
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
      alert(
        name +
          ", we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please enter your name and email!");
    }
  });
});
