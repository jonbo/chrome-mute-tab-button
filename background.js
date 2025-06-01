chrome.action.onClicked.addListener(function (tab) {
  const muted = !tab.mutedInfo.muted; // toggle
  chrome.tabs.update(tab.id, { muted });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const muted = tab.mutedInfo.muted;

  chrome.action.setIcon({
    tabId,
    path: muted ? "/muted.png" : "/unmuted.png"
  });

  chrome.action.setTitle({
    tabId,
    title: muted ? "Unmute Tab" : "Mute Tab"
  });
});
