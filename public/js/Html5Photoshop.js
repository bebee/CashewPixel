function Html5Photoshop() {
  var self = this;

  var serverAddress = "http://localhost:1447";

  /* getter and setter */

  this.getServerAddress = function() {
    return serverAddress;
  }
}

Html5Photoshop.prototype.Init = function() {
  var self = this;

  Magnifier.Init();
  FileNew.Init();
}
