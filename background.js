chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'frame':'none',
    'innerBounds': {
      'width': 800,
      'height': 630},
    'resizable':false},
    function(createdWindow){
      createdWindow.setAlwaysOnTop(true);
      createdWindow.contentWindow.minimize = function(){
        createdWindow.minimize();
      }
    })
});
