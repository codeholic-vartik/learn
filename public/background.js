// background.js
chrome.tabs.onActivated.addListener(() => {
    // Query the active tab to get the updated URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTabUrl = tabs[0].url;
      // Store the updated URL in chrome storage
      chrome.storage.local.set({ currentTabUrl: currentTabUrl });
    });
  });
  