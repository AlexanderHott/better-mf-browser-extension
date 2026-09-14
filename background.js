const extension = globalThis.browser ?? globalThis.chrome;
const action = extension.action ?? extension.browserAction;

action.onClicked.addListener((tab) => {
  if (extension.scripting) {
    extension.scripting.executeScript({
      target: { tabId: tab.id },
      func: injectCSS,
    });
  } else {
    extension.tabs.executeScript(tab.id, {
      code: `(${injectCSS.toString()})()`,
    });
  }
});

function injectCSS() {
  console.log("[bmfbe] injecting css");
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

    /* Some sites really aren't built for dark mode, especially the ones you use this extension on. */
    /*
    @media (prefers-color-scheme: dark) {
      body {
        color: #ccc; /* Light gray text for dark mode */
        background-color: #121212; /* Dark background */
      }
    }
    */
  `;
  const style = document.createElement("style");
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
}
