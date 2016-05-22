var Magnifier = {}

Magnifier.mMagnifierRatioChoices =
[
  33.33,
  50,
  75,
  100,
  120,
  150,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000];
Magnifier.mMagnifierRatio = 100;

Magnifier.SetMagnifierRatio = function(magnifierRatio) {
  mMagnifierRatio = magnifierRatio;
  this.magnifierRatioChanged(magnifierRatio);
}

Magnifier.GetMagnifierRatio = function() {
  return mMagnifierRatio;
}

Magnifier.Init = function() {
  // Set Magnifier Functionality
  $("#magnifier-textfield").change(function() {
    var valInNumber = $("#magnifier-textfield").val().replace(/\D/g, '');
    var val = valInNumber+"%";
    $("#magnifier-textfield").val(val);
  });
}
