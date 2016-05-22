"use strict";

var Tool = {
  mCurrentTool: SelectionTool,
  mClickedPos: []
}

Tool.Init = function() {
  MultiToolbox.Init();
  SelectionTool.Init();
  RectTool.Init();
  Tool.CurrentTool = SelectionTool;
  var elm = $("#workbench-content-list .tab.current .canvas")[0];
  paper.setup(elm);
}

Tool.AddClickedPos = function(Pos) {
  this.mClickedPos.push(Pos);
}

Tool.GetClickedPos = function(Pos) {
  return this.mClickedPos;
}

Tool.RemoveClickedPos = function(Pos) {
  this.mClickedPos = [];
}

var SelectionTool = {
}
for (var i in Tool) {
    SelectionTool[i] = Tool[i];
}
SelectionTool.Init = function() {

}

var RectTool = {
}
for (var i in Tool) {
    RectTool[i] = Tool[i];
}
RectTool.DrawingGuideline = null;
RectTool.Init = function() {
  $("body").on("click", "#rect-tool", function() {
    Tool.CurrentTool = RectTool;
    var allCanvas = $("#workbench-content-list .tab .canvas");
    allCanvas.on("click", function(e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      RectTool.OnClickPaper(x, y);
    });
  });
}

RectTool.OnClickPaper = function(x, y) {
  var elm = $("#workbench-content-list .tab.current .canvas")[0];
  RectTool.AddClickedPos([x, y]);
  var clickedPos = RectTool.GetClickedPos();
  if (clickedPos.length == 1) {
    var x1 = clickedPos[0][0];
    var y1 = clickedPos[0][1];
    var elm = $("#workbench-content-list .tab.current .canvas")[0];
    $("body").on("mousemove",
      "#workbench-content-list .tab.current .canvas",
      function(e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var x2 = x;
      var y2 = y;
      var point1 = new paper.Point(x1, y1);
      var point2 = new paper.Point(x2, y2);
      if (RectTool.DrawingGuideline != null)
        RectTool.DrawingGuideline.remove();
      RectTool.DrawingGuideline = new paper.Path.Rectangle(point1, point2);
  		// Give the stroke a color
  		RectTool.DrawingGuideline.strokeColor = 'black';
      RectTool.DrawingGuideline.strokeWidth = 1;
    });
  } else if (clickedPos.length == 2) {
    var x1 = clickedPos[0][0];
    var y1 = clickedPos[0][1];
    var elm = $("#workbench-content-list .tab.current .canvas")[0];
    var x2 = clickedPos[1][0];
    var y2 = clickedPos[1][1];
    var point1 = new paper.Point(x1, y1);
    var point2 = new paper.Point(x2, y2);
    var path = new paper.Path.Rectangle(point1, point2);
		// Give the stroke a color
		path.strokeColor = 'black';
    path.strokeWidth = 1;

    if (RectTool.DrawingGuideline != null)
      RectTool.DrawingGuideline.remove();
    $("body").off("mousemove", "#workbench-content-list .tab.current .canvas");
    RectTool.RemoveClickedPos();
  }
}

var MultiToolbox = {}

MultiToolbox.Init = function() {
  $("body").on("click", "#toolbar-div .multi-tool-arrow", function(e) {
    var ulElm = $(this).siblings("ul");
    if (ulElm.css("display") == "block") {
      ulElm.css("display", "none");
    } else if (ulElm.css("display") == "none") {
      ulElm.css("display", "block");
    }
  });
}

MultiToolbox.OnClickArrow = function(elm, e) {

}
