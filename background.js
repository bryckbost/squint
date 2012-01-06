chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {code: ".squint-blurred { -webkit-filter: blur(3px); }"});

  chrome.tabs.executeScript(null, 
    {
      code: "if (document.body.className.match(/squint-blurred/)) {document.body.className -= ' squint-blurred';} else { document.body.className += ' squint-blurred';}"
    }
  );
});
