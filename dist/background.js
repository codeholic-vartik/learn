chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab && tab.url) {
        // Get current list of URLs from storage
        chrome.storage.local.get('visitedUrls', (result) => {
          let visitedUrls = result.visitedUrls || [];
          
          // Add the new URL if not already in the list
          if (!visitedUrls.includes(tab.url)) {
            visitedUrls.push(tab.url);
            chrome.storage.local.set({ visitedUrls: visitedUrls });
          }
        });
        
        // Update currentTabUrl for live updates
        chrome.storage.local.set({ currentTabUrl: tab.url });
      }
    });
  });
  