browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript(tab.id, {
    code: `(${injectCSS.toString()})()`,
  });
});

function injectCSS() {
  const css = `
    body {
      margin: 40px auto;
      max-width: 650px;
      line-height: 1.6;
      font-size: 18px;
      color: #444;
      padding: 0 10px;
    }
    h1, h2, h3 {
      line-height: 1.2;
    }
    @media (prefers-color-scheme: dark) {
      body {
        color: #ccc; /* Light gray text for dark mode */
        background-color: #121212; /* Dark background */
      }
    }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
}
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: injectCSS,
//   });
// });
//
// function injectCSS() {
//   const css = `
//     body {
//       margin: 40px auto;
//       max-width: 650px;
//       line-height: 1.6;
//       font-size: 18px;
//       color: #444;
//       padding: 0 10px;
//     }
//     h1, h2, h3 {
//       line-height: 1.2;
//     }
//   `;
//
//   const style = document.createElement("style");
//   style.textContent = css;
//
//   // Wait for <head> to exist
//   if (document.head) {
//     document.head.appendChild(style);
//   } else {
//     document.addEventListener("DOMContentLoaded", () => {
//       document.head.appendChild(style);
//     });
//   }
// }
