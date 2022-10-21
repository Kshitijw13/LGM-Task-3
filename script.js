function productUpdate() {
  if (
    $("#name").val() != "" &&
    $("#email").val() != "" &&
    $("#website").val() != "" &&
    $("#imageLink").val() != ""
  ) {
    productAdd();
    formClear();
    $("#name").focus();
  } else {
    document.getElementById("errorMsg").innerHTML =
      "Please Fill all the fields of the form";
  }
}
function productAdd() {
  var genderOutput = genderOption();
  var skillOutput = skillSelected();
  if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
  }
  $("#productTable tbody").append(
    "<tr>" +
      "<td id='newData' class='animated fadeIn' style='height:100px'>" +
      "Name: " +
      $("#name").val() +
      "<br>" +
      "Gender: " +
      genderOutput +
      "<br>" +
      "Email: " +
      $("#email").val() +
      "<br>" +
      "Website: " +
      '<u style="color:blue">' +
      $("#website").val() +
      "</u>" +
      "<br>" +
      "Skills: " +
      skillOutput +
      "</td>" +
      "<td id='newData' class='animated fadeIn'>" +
      '<a href="' +
      $("#imageLink").val() +
      '" target="_blank">' +
      '<img src="' +
      $("#imageLink").val() +
      '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' +
      "</td>" +
      "</tr>"
  );
}
function genderOption() {
  const Selected = document.querySelectorAll('input[name="genderOption"]');
  let selectedValue;
  for (const Option of Selected) {
    if (Option.checked) {
      selectedValue = Option.value;
      break;
    }
  }
  return selectedValue;
}

function skillSelected() {
  const Selected = document.querySelectorAll('input[name="skillOption"]');
  let selectedValue = [];
  for (const Option of Selected) {
    if (Option.checked) {
      selectedValue.push(Option.value);
    }
  }
  return selectedValue.toString();
}
function formClear() {
  $("#name").val("");
  $("#email").val("");
  $("#website").val("");
  $("#imageLink").val("");
  document.getElementById("male").checked = true;
  document.getElementById("java").checked = true;
  document.getElementById("html").checked = false;
  document.getElementById("css").checked = false;
  document.getElementById("errorMsg").innerHTML = "<br>";
}
