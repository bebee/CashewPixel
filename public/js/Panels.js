Panel = function() {
  
}

Panel.Init = function() {
  // Remove focus after clicking menu
  $("#menubar-div ul li li").on("click", function() {
    $("#menubar-div ul li").blur();
  });
}

var FileNewPanel = new Panel();

FileNewPanel.Init = function() {

}
FileNewPanel.Show = function() {
  $.get("/templates/FileNewPanel.html", function(data, textStatus, XMLHttpRequest){
    var markup = data;

    $('#panel-div').append(markup);
    $('#panel-div').css("display", "block");
  });
}

FileNewPanel.Remove = function() {
  $('#panel-div').empty();
  $('#panel-div').css("display", "none");
}
