lightStatus = [false, false, false, false, false];

var color;

$(document).ready(function () {
  $("#customRadio1").click(function () {
    color = "red";
  });
  $("#customRadio2").click(function () {
    color = "green";
  });
  $("#customRadio3").click(function () {
    color = "blue";
  });
  $("#customRadio4").click(function () {
    color = "yellow";
  });

  $("#sel1").click(function () {
    number = $("sel1").val();
  });
});

function sliderval1(x) {
  lightStatus[x - 1] = document.getElementById(x.toString()).checked;
  if (lightStatus[x - 1] == true) {
    document.getElementById("one").style.background = color;
  } else {
    document.getElementById("one").style.background = null;
  }
}

function sliderval2(x) {
  lightStatus[x - 1] = document.getElementById(x.toString()).checked;
  if (lightStatus[x - 1] == true) {
    document.getElementById("two").style.background = color;
  } else {
    document.getElementById("two").style.background = null;
  }
}
function sliderval3(x) {
  lightStatus[x - 1] = document.getElementById(x.toString()).checked;
  if (lightStatus[x - 1] == true) {
    document.getElementById("three").style.background = color;
  } else {
    document.getElementById("three").style.background = null;
  }
}

function sliderval4(x) {
  lightStatus[x - 1] = document.getElementById(x.toString()).checked;
  if (lightStatus[x - 1] == true) {
    document.getElementById("four").style.background = color;
  } else {
    document.getElementById("four").style.background = null;
  }
}
function sliderval5(x) {
  lightStatus[x - 1] = document.getElementById(x.toString()).checked;
  if (lightStatus[x - 1] == true) {
    document.getElementById("five").style.background = color;
  } else {
    document.getElementById("five").style.background = null;
  }
}
// function sliderval(x) {
// lightStatus[x - 1] = document.getElementById(x.toString()).checked;
//   console.log(lightStatus);

//   if (lightStatus[x - 1] == true) {
//     switch (x) {
//       case 4: {
//         document.getElementById("four").style.background = color;
//         lightStatus[x - 1] = false;
//       }
//       case 5: {
//         document.getElementById("five").style.background = color;
//         lightStatus[x - 1] = false;
//       }
//     }
//   } else {
//     switch (x) {
//       case 4: {
//         document.getElementById("four").style.background = null;
//         l4 = false;
//       }
//       case 5: {
//         document.getElementById("five").style.background = null;
//         l5 = false;
//       }
//     }
//   }
// }
