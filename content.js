chrome.storage.local.get({ blockedSites: [] }, (data) => {
  const blockedSites = data.blockedSites;
  const currentHost = window.location.hostname;

  if (blockedSites.includes(currentHost)) {
    window.location.href = chrome.runtime.getURL("blocked.html");
  }
});
