chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.google.com/";
  chrome.tabs.create({ url: newURL });
});
