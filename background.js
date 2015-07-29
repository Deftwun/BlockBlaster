chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'frame':'none',
    'innerBounds': {
      'width': 800,
      'height': 600}
    'resizable':false}
});
