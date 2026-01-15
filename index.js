document.addEventListener("DOMContentLoaded", () => {
  console.log("Popup loaded");

  const blockBtn = document.getElementById("blockBtn");

  blockBtn.addEventListener("click", async () => {
    console.log("Block button clicked");

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab || !tab.url) {
      console.log("No active tab");
      return;
    }

    const hostname = new URL(tab.url).hostname;
    console.log("Blocking:", hostname);

    chrome.storage.local.get({ blockedSites: [] }, (data) => {
      const blockedSites = data.blockedSites;

      if (!blockedSites.includes(hostname)) {
        blockedSites.push(hostname);
      }

      chrome.storage.local.set({ blockedSites }, () => {
        console.log("Saved to storage:", blockedSites);
      });
    });
  });
});
