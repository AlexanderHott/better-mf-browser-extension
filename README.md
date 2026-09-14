# Better MF Browser Extension

Inject CSS into a page to make it readable.

CSS ~~stolen~~ adapted from <http://bettermotherfuckingwebsite.com/>

## Install

First, [open the GitHub page](https://github.com/AlexanderHott/better-mf-browser-extension), click **Code → Download ZIP**, and extract the download. On Windows, right-click the ZIP and choose **Extract All**. On Mac, double-click it.

### Chrome / Chromium

1. Create a folder called `Better MF` in your Documents folder.
2. Copy `background.js` and `manifest-v3.json` from the extracted download into it. Rename this copy of `manifest-v3.json` to `manifest.json`. If file endings are hidden, rename `manifest-v3` to `manifest`.
3. Paste `chrome://extensions` into Chrome's address bar and press Enter.
4. Turn on **Developer mode**, click **Load unpacked**, and select the `Better MF` folder.

Keep that folder in place. Chrome needs it to run the extension.

### Firefox

1. Paste `about:debugging#/runtime/this-firefox` into Firefox's address bar and press Enter.
2. Click **Load Temporary Add-on** and select the original `manifest.json` from the extracted download.

Repeat these steps after restarting Firefox. This is a temporary installation.

### Use the extension

Open a website, click your browser's puzzle-piece extensions button, then click **Better MF Browser Extension** to apply the styles. Browser settings pages can't be styled.

### Which manifest do I need?

A manifest tells the browser how to load the extension. Both versions use the same `background.js`.

- **Chrome / Chromium:** Use `manifest-v3.json`, renamed to `manifest.json`. Current Chrome requires Manifest V3.
- **Firefox:** Use the original `manifest.json`. It uses Manifest V2, which Firefox still supports.
