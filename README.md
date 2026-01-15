BLOCK_EXTENSION 🚫

A lightweight browser extension that blocks or restricts access to unwanted content/pages (e.g., blocked pages or specific URLs).
Built with JavaScript, HTML, and CSS using the Chrome Extension (Manifest V3) platform.

📌 Features

✋ Blocks pages or content based on defined logic inside the extension

🚀 Simple and minimal – easy to customize and extend

🧠 Works in modern Chromium-based browsers that support Manifest V3

📁 Repository Structure
BLOCK_EXTENSION/
├── .vscode/                  # VS Code config files  
├── blocked.html             # Block page shown when content is blocked  
├── content.js               # Content script injected into pages  
├── index.html               # Popup / UI page  
├── index.js                 # Popup script logic  
├── manifest.json            # Chrome extension manifest  
└── style.css                # UI styling

📦 Installation
🧪 Testing Locally

Clone the repository

git clone https://github.com/VenkateshValaboju/BLOCK_EXTENSION.git


Open Chrome (or other Chromium browser)
Go to:

chrome://extensions


Enable Developer Mode (toggle in top-right).

Click Load Unpacked and select the project directory.

That’s it — your extension should now be loaded and active!

🛠 How It Works

The extension is installed as an unpacked extension.

When the browser loads a page, content.js runs in the page context.

Based on your logic, it can redirect, block, or modify the page content.

If blocked, users see blocked.html with a simple UI message.

You can update the block logic by modifying content.js.

📌 Customization

🔧 You can customize:

URLs or patterns to block

Styles and text in blocked.html

Optional settings UI in index.html

🧩 Development

If you want to extend or tweak this extension:

Modify the JS logic (e.g., add rules in content.js)

Update manifest permissions as needed

Reload the extension in chrome://extensions

📜 Manifest Highlights

The manifest.json includes:

Permissions for activeTab and scripting

Content script(s) for pages

Browser action or popup UI

Manifest V3 is required for modern Chrome extensions.

💬 Contribution

Feel free to:

✨ Add new blocking rules

🛠 Improve UI / UX

🧪 Add tests or demos

Contributions are welcome!

🗒 License

This project is open-source — feel free to use it and customize it.
