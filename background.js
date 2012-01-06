chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, 
    {
      code: "document.body.style.setProperty('-webkit-filter', 'blur(1px)')"
    }
  );
});

chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
