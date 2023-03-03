// task-11//
$(document).ready(function () {
  $('#underlineBtn').click(function () {
    var text = $('#myText').text();
    var words = text.split(' ');
    var newHtml = '';
    for (var i = 0; i < words.length; i++) {
      newHtml += '<span style="text-decoration: underline;">' + words[i] + ' </span>';
    }
    $('#myText').html(newHtml);
  });
});

//task-12//
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function () {
    $("#panel").stop();
  });
});

//task-13//
$(document).ready(function () {
  $("button").click(function () {
    $("#flip").remove();
    $("#panel").remove();
  });
});

function remove_style() {
  $("#MyInput").css("border", "0");
  $("#MyInput").css("background-color", "white");
}

//task-14//
$('#divId').mousedown(function (event) {
  switch (event.which) {
    case 1:
      $('#divId').html('Left Mouse button pressed.');
      break;
    case 2:
      $('#divId').html('Middle Mouse button pressed.');
      break;
    case 3:
      $('#divId').html('Right Mouse button pressed.');
      break;
    default:
      $('#divId').html('You have a strange Mouse!');
  }
});

//task-15//
$(document).on('keypress', function (event) {
  let keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    alert('Your Text Save Sucessfull.');
  }
});

//task-16//
$(document).ready(function () {
  $("button").click(function () {

    // Select all the rows in the table
    // and get the count of the selected elements
    var rowCount = $("#Table_id tr").length;
    alert(rowCount);

    var columCount = $("#Table_id th").length;
    alert1(columCount);

  });
});

//task-17//
$(document).ready(function () {
  $("a").click(function () {
    $("#txt1").val("Hello Javascript!..");
  });
});

//  task-18//
$(document).ready(function() {
  $('#submitBtn').click(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    alert('Name: ' + name + '\nEmail: ' + email);
  });
});

// task-19//
$(document).ready(function() {
  // Select the element
  var element = $('#my-element');
  
  // Get the offset of the element
  var offset = element.offset();
  
  // Log the offset to the console
  console.log(offset.top + 'px, ' + offset.left + 'px');
});

