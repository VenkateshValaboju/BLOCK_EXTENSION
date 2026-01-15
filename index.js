document.addEventListener("DOMContentLoaded", () => {

  const blockBtn = document.getElementById("blockBtn");

  blockBtn.addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab || !tab.url) {
      return;
    }

    const hostname = new URL(tab.url).hostname;

    chrome.storage.local.get({ blockedSites: [] }, (data) => {
      const blockedSites = data.blockedSites;

      if (!blockedSites.includes(hostname)) {
        blockedSites.push(hostname);
      }

      chrome.storage.local.set({ blockedSites });
    });
  });
});
