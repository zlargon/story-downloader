document.addEventListener('keydown', function (e) {

  // Shift + D
  if (e.keyCode == 68 && e.shiftKey) {
    var url = document.getElementsByTagName('source')[0].src;
    window.open(url, '_blank');
  }

}, true);
