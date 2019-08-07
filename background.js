chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'id':'trackArr',
    'outerBounds': {
      'width': 900,
      'height': 750
    }
  });
});