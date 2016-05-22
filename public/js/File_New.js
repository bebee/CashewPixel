FileNew = {}

FileNew.Init = function() {
  $("#FileNewMenuItem").on("click", function() {
    FileNewPanel.Show();
  });

  $("body").on("submit", "#file-new-panel-form", function(e) {
    e.preventDefault();
    FileNew.SubmitForm();
    FileNewPanel.Remove();
  });
}

FileNew.SubmitForm = function() {
  $("#workbench-tab-list").append();
}
