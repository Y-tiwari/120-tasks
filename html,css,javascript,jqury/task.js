//task-4//

$(function () {
    $("table tr:nth-child(odd)")
        .addClass("zebrastripe");
});

// task-5//
onclick = "window.print();"
$('a.printPage').click(function () {
    window.print();
    return false;
});

//task-6//
$(document).ready(function () {
    $('p').each(function () {
        var html = $(this).html();
        var word = html.substr(0, html.indexOf(" "));
        var rest = html.substr(html.indexOf(" "));
        $(this).html(rest).prepend($("<span/>").html("<b>" + word + "</b>"));
    });
});

//task-7//
function addText() {
    $(document).ready(function () {

        var object = {
            id: "divID",
            class: "divClass",
            css: {
                "color": "Red"
            }
        };
        var addition = $("<div>", object);
        addition.html("Added text GFG");
        $("#parent").append(addition);
    });
}
//task-8//
function move(elem) {
    if ($(elem).parent().attr("id") == "nonSelected") {
        $(elem).detach().appendTo("#selected");
    } else {
        $(elem).detach().appendTo("#nonSelected");
    }
}

//task-9//
function new_element() {
    $("#header ul").append('<li>Java</li>');
    $("#header ul").append('<li>php</li>');
    $("#header ul").append('<li>C</li>');
}

//task-9//
$(document).ready(function () {
    $('.btn').click(function () {
        var content = $('#addList').val();
        var fixingContent =
            '<li>' + content + '</li>';

        $('.List').append(fixingContent);
    })
})

//task-10//
function Remove_options() {
    $('#myColor')
        .empty()
        .append('<option selected="selected" value="test">White</option>');
}